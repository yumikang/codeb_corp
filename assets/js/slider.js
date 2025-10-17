// ========================================
// WEBGL SLIDER FOR CODEB
// Performance optimized with memory management
// ========================================

import * as THREE from "three";

let currentSlideIndex = 0;
let isTransitioning = false;
let shaderMaterial, renderer, scene, camera, geometry, mesh;
let slideTextures = [];
let texturesLoaded = false;
let autoSlideTimer = null;
let progressAnimation = null;
let sliderEnabled = false;
let animationFrameId = null;
let isPageVisible = true;

const SLIDE_DURATION = 5000;
const PROGRESS_UPDATE_INTERVAL = 50;
const TRANSITION_DURATION = 2.5;

// codeB 프로젝트 이미지 사용
const slides = [
  {
    title: "Project One",
    media: "assets/img/project-slider-img/cr-slider-8.jpg"
  },
  {
    title: "Project Two",
    media: "assets/img/project-slider-img/cr-slider-9.jpg"
  },
  {
    title: "Project Three",
    media: "assets/img/project-slider-img/cr-slider-10.jpg"
  },
  {
    title: "Project Four",
    media: "assets/img/home-11/project/project-1.jpg"
  },
  {
    title: "Project Five",
    media: "assets/img/home-11/project/project-2.jpg"
  },
  {
    title: "Project Six",
    media: "assets/img/home-11/project/project-3.jpg"
  }
];

// Touch support
let touchStartX = 0;
let touchEndX = 0;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform vec2 uResolution;
  uniform vec2 uTexture1Size;
  uniform vec2 uTexture2Size;

  varying vec2 vUv;

  vec2 getCoverUV(vec2 uv, vec2 textureSize) {
    vec2 s = uResolution / textureSize;
    float scale = max(s.x, s.y);
    vec2 scaledSize = textureSize * scale;
    vec2 offset = (uResolution - scaledSize) * 0.5;
    return (uv * uResolution - offset) / scaledSize;
  }

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(noise(i), noise(i + vec2(1.0, 0.0)), f.x),
      mix(noise(i + vec2(0.0, 1.0)), noise(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  // Glass effect transition
  vec4 glassEffect(vec2 uv, float progress) {
    vec2 center = vec2(0.5, 0.5);
    vec2 p = uv * uResolution;

    vec2 uv1 = getCoverUV(uv, uTexture1Size);
    vec2 uv2_base = getCoverUV(uv, uTexture2Size);

    float maxRadius = length(uResolution) * 0.85;
    float bubbleRadius = progress * maxRadius;
    vec2 sphereCenter = center * uResolution;

    float dist = length(p - sphereCenter);
    float normalizedDist = dist / max(bubbleRadius, 0.001);
    vec2 direction = (dist > 0.0) ? (p - sphereCenter) / dist : vec2(0.0);
    float inside = smoothstep(bubbleRadius + 3.0, bubbleRadius - 3.0, dist);

    float distanceFactor = smoothstep(0.3, 1.0, normalizedDist);
    float time = progress * 5.0;

    vec2 distortedUV = uv2_base;
    if (inside > 0.0) {
      float refractionOffset = 0.08 * pow(distanceFactor, 1.5);
      vec2 flowDirection = normalize(direction + vec2(sin(time), cos(time * 0.7)) * 0.3);
      distortedUV -= flowDirection * refractionOffset;

      float wave = sin(normalizedDist * 22.0 - time * 3.5);
      float waveOffset = wave * 0.025 * distanceFactor;
      distortedUV -= direction * waveOffset;
    }

    vec4 newImg;
    if (inside > 0.0) {
      float aberrationOffset = 0.02 * pow(distanceFactor, 1.2);

      vec2 uv_r = distortedUV + direction * aberrationOffset * 1.2;
      vec2 uv_g = distortedUV + direction * aberrationOffset * 0.2;
      vec2 uv_b = distortedUV - direction * aberrationOffset * 0.8;

      float r = texture2D(uTexture2, uv_r).r;
      float g = texture2D(uTexture2, uv_g).g;
      float b = texture2D(uTexture2, uv_b).b;
      newImg = vec4(r, g, b, 1.0);
    } else {
      newImg = texture2D(uTexture2, uv2_base);
    }

    vec4 currentImg = texture2D(uTexture1, uv1);

    if (progress > 0.95) {
      vec4 pureNewImg = texture2D(uTexture2, uv2_base);
      float endTransition = (progress - 0.95) / 0.05;
      newImg = mix(newImg, pureNewImg, endTransition);
    }

    return mix(currentImg, newImg, inside);
  }

  void main() {
    gl_FragColor = glassEffect(vUv, uProgress);
  }
`;

// Navigation UI
const createSlidesNavigation = () => {
  const navContainer = document.getElementById("slidesNav");
  navContainer.innerHTML = "";

  slides.forEach((slide, index) => {
    const navItem = document.createElement("div");
    navItem.className = `slide-nav-item ${index === 0 ? "active" : ""}`;
    navItem.dataset.slideIndex = index;
    navItem.innerHTML = `
      <div class="slide-progress-line">
        <div class="slide-progress-fill" style="width: 0%"></div>
      </div>
      <div class="slide-nav-title">${slide.title}</div>
    `;

    navItem.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetIndex = parseInt(navItem.dataset.slideIndex);
      if (targetIndex !== currentSlideIndex && !isTransitioning) {
        navigateToSlide(targetIndex);
      }
    });

    navContainer.appendChild(navItem);
  });
};

const updateNavigationState = (activeIndex) => {
  const navItems = document.querySelectorAll(".slide-nav-item");
  navItems.forEach((item, index) => {
    item.classList.toggle("active", index === activeIndex);
  });
};

const updateSlideProgress = (slideIndex, progress) => {
  const navItems = document.querySelectorAll(".slide-nav-item");
  if (navItems[slideIndex]) {
    const progressFill = navItems[slideIndex].querySelector(".slide-progress-fill");
    progressFill.style.width = `${progress}%`;
    progressFill.style.opacity = "1";
  }
};

const fadeSlideProgress = (slideIndex) => {
  const navItems = document.querySelectorAll(".slide-nav-item");
  if (navItems[slideIndex]) {
    const progressFill = navItems[slideIndex].querySelector(".slide-progress-fill");
    progressFill.style.opacity = "0";
    setTimeout(() => (progressFill.style.width = "0%"), 300);
  }
};

const quickResetProgress = (slideIndex) => {
  const navItems = document.querySelectorAll(".slide-nav-item");
  if (navItems[slideIndex]) {
    const progressFill = navItems[slideIndex].querySelector(".slide-progress-fill");
    progressFill.style.transition = "width 0.2s ease-out";
    progressFill.style.width = "0%";
    setTimeout(() => {
      progressFill.style.transition = "width 0.1s ease, opacity 0.3s ease";
    }, 200);
  }
};

const updateCounter = (index) => {
  const slideNumber = document.getElementById("slideNumber");
  slideNumber.textContent = String(index + 1).padStart(2, "0");

  const slideTotal = document.getElementById("slideTotal");
  slideTotal.textContent = String(slides.length).padStart(2, "0");
};

// Timer functions
const startAutoSlideTimer = () => {
  if (!texturesLoaded || !sliderEnabled || slideTextures.length < 2) return;

  stopAutoSlideTimer();

  let progress = 0;
  const increment = (100 / SLIDE_DURATION) * PROGRESS_UPDATE_INTERVAL;

  progressAnimation = setInterval(() => {
    if (!sliderEnabled) {
      stopAutoSlideTimer();
      return;
    }

    progress += increment;
    updateSlideProgress(currentSlideIndex, progress);

    if (progress >= 100) {
      clearInterval(progressAnimation);
      progressAnimation = null;
      fadeSlideProgress(currentSlideIndex);

      if (!isTransitioning) {
        handleSlideChange();
      }
    }
  }, PROGRESS_UPDATE_INTERVAL);
};

const stopAutoSlideTimer = () => {
  if (progressAnimation) {
    clearInterval(progressAnimation);
    progressAnimation = null;
  }
  if (autoSlideTimer) {
    clearTimeout(autoSlideTimer);
    autoSlideTimer = null;
  }
};

const safeStartTimer = (delay = 0) => {
  stopAutoSlideTimer();
  if (sliderEnabled && texturesLoaded) {
    if (delay > 0) {
      autoSlideTimer = setTimeout(() => {
        if (sliderEnabled) startAutoSlideTimer();
      }, delay);
    } else {
      startAutoSlideTimer();
    }
  }
};

// Navigation
const navigateToSlide = (targetIndex) => {
  if (isTransitioning || targetIndex === currentSlideIndex) return;

  stopAutoSlideTimer();
  quickResetProgress(currentSlideIndex);

  const currentTexture = slideTextures[currentSlideIndex];
  const targetTexture = slideTextures[targetIndex];

  if (!currentTexture || !targetTexture) return;

  isTransitioning = true;

  shaderMaterial.uniforms.uTexture1.value = currentTexture;
  shaderMaterial.uniforms.uTexture2.value = targetTexture;
  shaderMaterial.uniforms.uTexture1Size.value = currentTexture.userData.size;
  shaderMaterial.uniforms.uTexture2Size.value = targetTexture.userData.size;

  currentSlideIndex = targetIndex;
  updateCounter(currentSlideIndex);
  updateNavigationState(currentSlideIndex);

  // Simple GSAP-like animation
  const startTime = Date.now();
  const duration = TRANSITION_DURATION * 1000;

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (power2.inOut)
    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    shaderMaterial.uniforms.uProgress.value = eased;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      shaderMaterial.uniforms.uProgress.value = 0;
      shaderMaterial.uniforms.uTexture1.value = targetTexture;
      shaderMaterial.uniforms.uTexture1Size.value = targetTexture.userData.size;
      isTransitioning = false;
      safeStartTimer(100);
    }
  };

  animate();
};

const handleSlideChange = () => {
  if (isTransitioning || !texturesLoaded || !sliderEnabled) return;

  const nextIndex = (currentSlideIndex + 1) % slides.length;
  navigateToSlide(nextIndex);
};

const handleSwipe = () => {
  if (Math.abs(touchEndX - touchStartX) < 50) return;

  if (touchEndX < touchStartX && !isTransitioning && sliderEnabled) {
    stopAutoSlideTimer();
    quickResetProgress(currentSlideIndex);
    handleSlideChange();
  } else if (touchEndX > touchStartX && !isTransitioning && sliderEnabled) {
    stopAutoSlideTimer();
    quickResetProgress(currentSlideIndex);
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    navigateToSlide(prevIndex);
  }
};

// Texture loading
const loadImageTexture = (src) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    const timeout = setTimeout(() => reject(new Error("Timeout")), 10000);

    loader.load(
      src,
      (texture) => {
        clearTimeout(timeout);
        texture.minFilter = texture.magFilter = THREE.LinearFilter;
        texture.userData = {
          size: new THREE.Vector2(texture.image.width, texture.image.height)
        };
        resolve(texture);
      },
      undefined,
      (error) => {
        clearTimeout(timeout);
        reject(error);
      }
    );
  });
};

// Initialize
const initializeRenderer = async () => {
  const canvas = document.querySelector(".webgl-canvas");
  if (!canvas) return;

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: false,
    alpha: false
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTexture1: { value: null },
      uTexture2: { value: null },
      uProgress: { value: 0.0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uTexture1Size: { value: new THREE.Vector2(1, 1) },
      uTexture2Size: { value: new THREE.Vector2(1, 1) }
    },
    vertexShader,
    fragmentShader
  });

  geometry = new THREE.PlaneGeometry(2, 2);
  mesh = new THREE.Mesh(geometry, shaderMaterial);
  scene.add(mesh);

  // Load textures
  for (let i = 0; i < slides.length; i++) {
    try {
      const texture = await loadImageTexture(slides[i].media);
      slideTextures.push(texture);
      console.log(`Loaded image ${i + 1}/${slides.length}`);
    } catch (error) {
      console.warn(`Failed to load image ${i}:`, error);
    }
  }

  if (slideTextures.length >= 2) {
    shaderMaterial.uniforms.uTexture1.value = slideTextures[0];
    shaderMaterial.uniforms.uTexture2.value = slideTextures[1];
    shaderMaterial.uniforms.uTexture1Size.value = slideTextures[0].userData.size;
    shaderMaterial.uniforms.uTexture2Size.value = slideTextures[1].userData.size;

    texturesLoaded = true;
    sliderEnabled = true;

    // Show slider wrapper
    const sliderWrapper = document.querySelector(".slider-wrapper");
    if (sliderWrapper) {
      sliderWrapper.classList.add("loaded");
    }

    safeStartTimer(500);
  }

  // Render loop with visibility check
  const render = () => {
    if (isPageVisible) {
      animationFrameId = requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
  };
  render();
};

// ========================================
// MEMORY MANAGEMENT & CLEANUP
// ========================================

// Dispose single texture
const disposeTexture = (texture) => {
  if (texture) {
    texture.dispose();
  }
};

// Dispose all resources
const disposeAll = () => {
  console.log('Disposing WebGL resources...');

  // Stop all timers
  stopAutoSlideTimer();
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  // Dispose textures
  slideTextures.forEach(disposeTexture);
  slideTextures = [];

  // Dispose geometry
  if (geometry) {
    geometry.dispose();
    geometry = null;
  }

  // Dispose material
  if (shaderMaterial) {
    shaderMaterial.dispose();
    shaderMaterial = null;
  }

  // Dispose renderer
  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss();
    renderer = null;
  }

  // Clear scene
  if (scene) {
    scene.clear();
    scene = null;
  }

  texturesLoaded = false;
  sliderEnabled = false;

  console.log('WebGL resources disposed');
};

// Pause rendering (tab hidden/inactive)
const pauseRendering = () => {
  isPageVisible = false;
  stopAutoSlideTimer();

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  console.log('WebGL rendering paused');
};

// Resume rendering (tab visible/active)
const resumeRendering = () => {
  isPageVisible = true;

  if (renderer && scene && camera) {
    const render = () => {
      if (isPageVisible) {
        animationFrameId = requestAnimationFrame(render);
        renderer.render(scene, camera);
      }
    };
    render();
  }

  if (sliderEnabled && !isTransitioning) {
    safeStartTimer();
  }

  console.log('WebGL rendering resumed');
};

// Event listeners
window.addEventListener("load", async () => {
  createSlidesNavigation();
  updateCounter(0);
  await initializeRenderer();
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".slides-navigation")) return;
  if (!isTransitioning && sliderEnabled) {
    stopAutoSlideTimer();
    quickResetProgress(currentSlideIndex);
    handleSlideChange();
  }
});

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

window.addEventListener("resize", () => {
  if (renderer && shaderMaterial) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    shaderMaterial.uniforms.uResolution.value.set(
      window.innerWidth,
      window.innerHeight
    );
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowRight") {
    e.preventDefault();
    if (!isTransitioning && sliderEnabled) {
      stopAutoSlideTimer();
      quickResetProgress(currentSlideIndex);
      handleSlideChange();
    }
  } else if (e.code === "ArrowLeft") {
    e.preventDefault();
    if (!isTransitioning && sliderEnabled) {
      stopAutoSlideTimer();
      quickResetProgress(currentSlideIndex);
      const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      navigateToSlide(prevIndex);
    }
  }
});

// Page visibility change - pause/resume rendering
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseRendering();
  } else {
    resumeRendering();
  }
});

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  disposeAll();
});

// Cleanup on navigation away (for SPAs)
window.addEventListener("pagehide", () => {
  disposeAll();
});
