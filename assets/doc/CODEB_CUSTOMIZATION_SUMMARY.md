# codeB 홈페이지 커스터마이징 완료 보고서

> **작업 완료일**: 2025
> **템플릿 파일**: `index-personal-portfolio-light.html`
> **회사명**: codeB

---

## ✅ 완료된 수정 사항

### 1. 메타 정보 및 SEO (라인 8-9)

**수정 전**:
```html
<title>Agntix - Digital Agency & Creative Portfolio HTML Template</title>
<meta name="description" content="">
```

**수정 후**:
```html
<title>codeB - Your Digital Team, Reimagined</title>
<meta name="description" content="기술로 고객의 실행력을 확장합니다. 모듈형 CMS와 End-to-End 개발 체계로 빠르고 유연한 비즈니스 가치를 실현하는 디지털 파트너 codeB">
```

---

### 2. Header 영역 (라인 165)

**연락처 이메일 변경**:
```html
<!-- 수정 전 -->
hello@agntix.com

<!-- 수정 후 -->
contact@codeb.kr
```

---

### 3. Hero 섹션 (라인 276-313)

#### 메인 타이틀
```html
<!-- 수정 전 -->
Freelance 3D designer Based in London

<!-- 수정 후 -->
Your Digital Team, Reimagined
기술로 고객의 실행력을 확장합니다
```

#### 서브 카피
```html
<!-- 수정 전 -->
I'm dedicated to crafting websites that bring your ideas to life,
combining design and development

<!-- 수정 후 -->
내부 개발팀 없이도 완성도 높은 웹·앱 솔루션을.
codeB는 모듈형 CMS와 End-to-End 개발 체계를 통해
기획부터 런칭까지 빠르고 유연하게 비즈니스 가치를 실현합니다.
```

#### CTA 버튼
```html
<!-- 수정 전 -->
Contact Me

<!-- 수정 후 -->
프로젝트 문의하기
```

#### 회사명
```html
<!-- 수정 전 -->
Joris Brianti

<!-- 수정 후 -->
codeB
```

---

### 4. Service 섹션 (라인 450-473)

#### 섹션 헤드라인
```html
<!-- 수정 전 -->
What i Do

<!-- 수정 후 -->
End-to-End, Agile, Modular. 기술로 완성되는 실행력.
```

#### 서비스 항목
| 순서 | 수정 전 | 수정 후 |
|------|---------|---------|
| 1 | 3D | 🧩 모듈형 CMS 구축 |
| 2 | Motion | 🧮 관리자 시스템 개발 |
| 3 | Animation | 🛍️ 쇼핑몰·예약·커뮤니티 |
| 4 | Product Renders | ⚙️ End-to-End 개발 |
| 5 | 3d design | 🔁 유지보수·기술고도화 |

---

### 5. About/Vision 섹션 (라인 382-421)

#### 섹션 타이틀
```html
<!-- 수정 전 -->
About Me

<!-- 수정 후 -->
Our Vision
```

#### 메인 헤드라인
```html
<!-- 수정 전 -->
I'm a selectively skilled product designer with strong focus on
producing high quality and impactful digital experience.

<!-- 수정 후 -->
기술은 도구일 뿐,
우리의 목표는 '고객의 성장'입니다.
```

#### 본문 내용
```html
<!-- 수정 전 -->
I'm a French digital designer and web developer with over 10 years of experience.
At the crossroads of design, motion and web development, the diversity of my skills

<!-- 수정 후 -->
codeB는 단순한 외주 개발사가 아닙니다.
고객의 장기적 로드맵을 함께 설계하고,
투명한 협업과 지속적인 기술 지원을 통해
비즈니스의 성장 파트너가 됩니다.
```

#### CTA 버튼
```html
<!-- 수정 전 -->
About Me

<!-- 수정 후 -->
회사 소개
```

---

### 6. Footer 영역 (라인 1298-1345)

#### Footer CTA
```html
<!-- 수정 전 -->
Looking for a new talent
hello@gmail.com

<!-- 수정 후 -->
지금, 당신의 디지털 팀을 새롭게 만들어보세요.
contact@codeb.kr
```

#### 버튼
| 버튼 | 수정 전 | 수정 후 |
|------|---------|---------|
| 1 | Contact Me | 프로젝트 상담하기 |
| 2 | Download CV | 포트폴리오 보기 |

#### 저작권 정보
```html
<!-- 수정 전 -->
© 2025 all rights reserved
Available for a full-time position
Made by Agntix.

<!-- 수정 후 -->
© 2025 codeB. All rights reserved
Your Digital Team, Reimagined
기술로 실행력을, 실행력으로 성과를.
```

---

## 📋 추가 작업 필요 사항

### 필수 작업
- [ ] **로고 이미지 교체**
  - 위치: `assets/img/logo/`
  - 필요 파일: `logo-white.png`, `logo-black.png`
  - 권장 크기: 120-150px 너비

- [ ] **파비콘 교체**
  - 위치: `assets/img/favicon/favicon.png`
  - 권장 크기: 32x32px

- [ ] **히어로 배경 이미지**
  - 현재: `assets/img/home-14/hero/hero-thumb-bg.jpg`
  - 권장 크기: 1920x1080px 이상

### 권장 작업
- [ ] **프로젝트 포트폴리오 이미지 교체** (라인 489-588)
  - codeB의 실제 프로젝트로 교체
  - 프로젝트명, 카테고리, 이미지 변경

- [ ] **클라이언트/파트너 로고 교체** (라인 321-370)
  - Brand Area 섹션에 실제 협력사 로고 추가

- [ ] **고객 후기 섹션** (라인 987-1220)
  - 실제 고객 리뷰로 교체
  - 고객사 로고 또는 담당자 정보 업데이트

- [ ] **언어 설정 변경** (라인 2)
  - RTL → LTR 변경 고려 (한국어 사이트)
  ```html
  <!-- 현재 -->
  <html class="no-js agntix-light" lang="zxx" dir="rtl">

  <!-- 권장 -->
  <html class="no-js agntix-light" lang="ko" dir="ltr">
  ```

---

## 🎨 스타일 커스터마이징 (선택)

### 브랜드 컬러 변경
`assets/css/custom.css` 파일 생성 후:

```css
:root {
    --codeb-primary: #your-primary-color;
    --codeb-secondary: #your-secondary-color;
}
```

---

## 🔗 주요 링크 업데이트 필요

현재 템플릿에서 사용 중인 링크:
- `contact-me-light.html` → 문의 페이지
- `about-me-light.html` → 회사 소개 페이지
- `service-1-light.html` → 서비스 상세 페이지
- `portfolio-masonry-light.html` → 포트폴리오 페이지

**TODO**: 각 페이지도 codeB 내용으로 커스터마이징 필요

---

## 📱 반응형 및 호환성 테스트

### 테스트 체크리스트
- [ ] 데스크톱 (1920px 이상)
- [ ] 노트북 (1366px)
- [ ] 태블릿 (768px)
- [ ] 모바일 (375px, 414px)
- [ ] Chrome, Safari, Firefox, Edge 브라우저

---

## 🚀 배포 전 최종 체크

- [ ] 모든 이미지 최적화 (압축)
- [ ] 깨진 링크 확인
- [ ] 이메일 주소 동작 확인
- [ ] 폼 제출 테스트
- [ ] 페이지 로딩 속도 확인
- [ ] SEO 메타 태그 검증

---

## 📞 기술 지원

수정 완료된 파일: `index-personal-portfolio-light.html`

추가 커스터마이징이 필요하거나 질문이 있으시면 언제든지 문의해주세요!

**작업 완료**: 메인 페이지 텍스트 커스터마이징 100% 완료 ✅
