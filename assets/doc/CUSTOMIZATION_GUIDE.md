# 회사 홈페이지 커스터마이징 가이드

> 템플릿: `index-personal-portfolio-light.html`
> 목적: 회사 공식 홈페이지 제작

---

## 📋 목차
1. [기본 설정 변경](#1-기본-설정-변경)
2. [섹션별 콘텐츠 수정 가이드](#2-섹션별-콘텐츠-수정-가이드)
3. [이미지 및 로고 교체](#3-이미지-및-로고-교체)
4. [색상 및 스타일 커스터마이징](#4-색상-및-스타일-커스터마이징)
5. [메뉴 구조 변경](#5-메뉴-구조-변경)

---

## 1. 기본 설정 변경

### 1.1 페이지 제목 및 메타 정보
**파일 위치**: `index-personal-portfolio-light.html` (라인 8-10)

```html
<!-- 수정 전 -->
<title>Agntix - Digital Agency & Creative Portfolio HTML Template</title>
<meta name="description" content="">

<!-- 수정 후 -->
<title>회사명 - 비즈니스 설명</title>
<meta name="description" content="회사 소개 및 주요 서비스 설명 (SEO용)">
```

### 1.2 파비콘 교체
**파일 위치**: `index-personal-portfolio-light.html` (라인 13)

```html
<!-- 수정 전 -->
<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon/favicon.png">

<!-- 수정 후 -->
<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon/your-company-favicon.png">
```

**준비물**:
- 파비콘 이미지 (16x16px, 32x32px PNG 또는 ICO 형식)
- 저장 경로: `assets/img/favicon/`

### 1.3 언어 및 방향 설정
**파일 위치**: `index-personal-portfolio-light.html` (라인 2)

```html
<!-- 현재 (RTL - 오른쪽에서 왼쪽) -->
<html class="no-js agntix-light" lang="zxx" dir="rtl">

<!-- 한국어 사이트로 변경 (LTR - 왼쪽에서 오른쪽) -->
<html class="no-js agntix-light" lang="ko" dir="ltr">
```

**⚠️ 중요**: RTL을 LTR로 변경하면 레이아웃이 반전됩니다. CSS 파일도 확인 필요.

---

## 2. 섹션별 콘텐츠 수정 가이드

### 2.1 Header (헤더) 영역
**파일 위치**: 라인 152-183

#### 로고 변경
```html
<!-- 수정 전 (라인 160) -->
<a href="index.html"><img data-width="120" src="assets/img/logo/logo-white.png" alt=""></a>

<!-- 수정 후 -->
<a href="index.html"><img data-width="120" src="assets/img/logo/your-company-logo-white.png" alt="회사명"></a>
```

**준비물**:
- 흰색 로고 (투명 배경 PNG, 권장 너비 120-150px)
- 검정 로고 (투명 배경 PNG, Offcanvas 메뉴용)

#### 연락처 이메일 변경
```html
<!-- 수정 전 (라인 165) -->
<a class="tp-line-white" href="mailto:hello@agntix.com">hello@agntix.com</a>

<!-- 수정 후 -->
<a class="tp-line-white" href="mailto:info@yourcompany.com">info@yourcompany.com</a>
```

---

### 2.2 Hero Section (메인 비주얼) 영역
**파일 위치**: 라인 267-319

#### 메인 카피 변경
```html
<!-- 수정 전 (라인 276) -->
<span class="pp-hero-text tp-split-text tp-split-right">Freelance 3D <br>designer Based <br>in London</span>

<!-- 수정 후 예시 1 (디지털 마케팅 회사) -->
<span class="pp-hero-text tp-split-text tp-split-right">디지털 마케팅의 <br>새로운 기준을 <br>제시합니다</span>

<!-- 수정 후 예시 2 (IT 솔루션 회사) -->
<span class="pp-hero-text tp-split-text tp-split-right">혁신적인 IT <br>솔루션으로 <br>비즈니스 성장</span>
```

#### 서브 카피 변경
```html
<!-- 수정 전 (라인 282-286) -->
<p>
    I'm dedicated to crafting websites <br>
    that bring your ideas to life, combining <br>
    design and development
</p>

<!-- 수정 후 예시 -->
<p>
    데이터 기반의 전략으로 <br>
    고객의 비즈니스 성장을 돕는 <br>
    디지털 파트너입니다
</p>
```

#### 회사명 변경
```html
<!-- 수정 전 (라인 313) -->
<h4 class="pp-hero-title tp-text-revel-anim" data-ease="bounce">Joris Brianti</h4>

<!-- 수정 후 -->
<h4 class="pp-hero-title tp-text-revel-anim" data-ease="bounce">Your Company Name</h4>
```

#### 배경 이미지 변경
```html
<!-- 수정 전 (라인 268) -->
<div class="pp-hero-area pp-hero-hight pp-hero-ptb z-index-1 d-flex align-items-end"
     data-background="assets/img/home-14/hero/hero-thumb-bg.jpg">

<!-- 수정 후 -->
<div class="pp-hero-area pp-hero-hight pp-hero-ptb z-index-1 d-flex align-items-end"
     data-background="assets/img/home-14/hero/your-hero-background.jpg">
```

**준비물**:
- 히어로 배경 이미지 (1920px x 1080px 이상, JPG/PNG)
- 히어로 썸네일 이미지 (라인 270, PNG 권장)

---

### 2.3 Brand Area (파트너/클라이언트 로고) 영역
**파일 위치**: 라인 321-370

이 섹션에서 협력사/고객사 로고를 표시합니다.

```html
<!-- 기존 구조 -->
<div class="pp-brand-item">
    <img src="assets/img/brand/brand-1.png" alt="">
</div>

<!-- 수정: 로고 이미지만 교체 -->
<div class="pp-brand-item">
    <img src="assets/img/brand/client-logo-1.png" alt="클라이언트명">
</div>
```

**권장 사항**:
- 로고 개수: 5-8개
- 이미지 크기: 150px x 80px 내외
- 형식: PNG (투명 배경)
- 그레이스케일 또는 단색 처리 권장

---

### 2.4 About Area (회사 소개) 영역
**파일 위치**: 라인 372-439

#### 섹션 제목 변경
```html
<!-- 수정 전 -->
<span>About Me</span>

<!-- 수정 후 -->
<span>회사 소개</span>
```

#### 소개 내용 변경
회사의 미션, 비전, 핵심 가치를 작성합니다.

**작성 가이드**:
1. **첫 단락**: 회사의 정체성 (설립 연도, 주요 사업)
2. **두 번째 단락**: 차별화 포인트 (강점, 전문성)
3. **세 번째 단락**: 미래 비전 및 고객 가치

---

### 2.5 Service Area (서비스 소개) 영역
**파일 위치**: 라인 441-479

#### 섹션 제목 변경
```html
<!-- 수정 전 (라인 450) -->
<span>What i Do</span>

<!-- 수정 후 -->
<span>제공 서비스</span>
```

#### 서비스 항목 변경
```html
<!-- 수정 전 -->
<a href="service-1-light.html" class="pp-service-item z-index-1">
    <span class="pp-service-item-title">3D</span>
</a>

<!-- 수정 후 예시 (디지털 마케팅) -->
<a href="service-1-light.html" class="pp-service-item z-index-1">
    <span class="pp-service-item-title">퍼포먼스 마케팅</span>
</a>
<a href="service-1-light.html" class="pp-service-item z-index-1">
    <span class="pp-service-item-title">브랜드 전략</span>
</a>
<a href="service-1-light.html" class="pp-service-item z-index-1">
    <span class="pp-service-item-title">콘텐츠 제작</span>
</a>
<a href="service-1-light.html" class="pp-service-item current z-index-1">
    <span class="pp-service-item-title">소셜 미디어</span>
</a>
<a href="service-1-light.html" class="pp-service-item z-index-1">
    <span class="pp-service-item-title">데이터 분석</span>
</a>
```

**서비스 항목 예시 (업종별)**:

**IT 솔루션 회사**:
- 시스템 개발
- 클라우드 마이그레이션
- IT 컨설팅
- 보안 솔루션
- 유지보수

**웹/앱 개발**:
- 웹사이트 개발
- 모바일 앱
- UI/UX 디자인
- 반응형 웹
- CMS 구축

---

### 2.6 Project/Portfolio Area (포트폴리오) 영역
**파일 위치**: 라인 489-588

#### 섹션 제목 변경
```html
<!-- 수정 전 (라인 496) -->
<span class="tp-section-subtitle-clash clash-subtitle-pos body-ff">
    Work Showcase
</span>

<!-- 수정 후 -->
<span class="tp-section-subtitle-clash clash-subtitle-pos body-ff">
    주요 프로젝트
</span>

<!-- 수정 전 (라인 507) -->
<h3 class="tp-section-title-teko fs-120">Discover my <br>Creative Expertise</h3>

<!-- 수정 후 -->
<h3 class="tp-section-title-teko fs-120">성공 사례를 통한 <br>입증된 실력</h3>
```

#### 프로젝트 항목 추가/수정
```html
<!-- 기본 구조 (라인 534-576) -->
<div class="col-lg-6 tp_fade_anim" data-delay=".3" data-fade-from="left">
    <div class="pp-project-item tp--hover-item mb-65">
        <div class="pp-project-item-thumb not-hide-cursor" data-cursor="View<br>Demo">
            <a class="cursor-hide" href="portfolio-details-modern-light.html">
                <img src="assets/img/home-04/project/project-4.jpg" alt="">
            </a>
        </div>
        <div class="pp-project-item-content">
            <div class="pp-project-item-sub-wrap d-flex align-items-center">
                <span class="pp-project-item-subtitle">Branding</span>
                <span class="pp-project-item-subtitle">3D Design</span>
            </div>
            <h3 class="pp-project-item-title">
                <a href="portfolio-details-modern-light.html">Whisper & Spice</a>
            </h3>
        </div>
    </div>
</div>

<!-- 수정 예시 -->
<div class="col-lg-6 tp_fade_anim" data-delay=".3" data-fade-from="left">
    <div class="pp-project-item tp--hover-item mb-65">
        <div class="pp-project-item-thumb not-hide-cursor" data-cursor="자세히<br>보기">
            <a class="cursor-hide" href="portfolio-details-modern-light.html">
                <img src="assets/img/projects/project-1.jpg" alt="프로젝트명">
            </a>
        </div>
        <div class="pp-project-item-content">
            <div class="pp-project-item-sub-wrap d-flex align-items-center">
                <span class="pp-project-item-subtitle">웹 개발</span>
                <span class="pp-project-item-subtitle">UI/UX</span>
            </div>
            <h3 class="pp-project-item-title">
                <a href="portfolio-details-modern-light.html">ABC 기업 홈페이지</a>
            </h3>
        </div>
    </div>
</div>
```

**준비물**:
- 프로젝트 썸네일 이미지 (800px x 600px 이상)
- 프로젝트명, 카테고리 (태그)
- 프로젝트 상세 페이지 링크

---

### 2.7 Skill Area (역량/강점) 영역
**파일 위치**: 라인 631-751

이 섹션에서 회사의 핵심 역량을 시각적으로 표현합니다.

#### 스킬 항목 변경
기존의 개인 스킬을 회사의 핵심 역량으로 변경:

**예시**:
- 전략 기획 역량
- 기술 전문성
- 고객 만족도
- 프로젝트 성공률

---

### 2.8 Award Area (수상/인증) 영역
**파일 위치**: 라인 813-984

회사의 수상 내역, 인증, 성과를 표시합니다.

```html
<!-- 수정 전 -->
<h3 class="pp-award-title"><a href="#">Awwward Best Website</a></h3>
<span class="pp-award-date">2023</span>

<!-- 수정 후 예시 -->
<h3 class="pp-award-title"><a href="#">벤처기업 인증</a></h3>
<span class="pp-award-date">2023</span>
```

**추가 가능한 항목**:
- 정부 인증 (벤처, 이노비즈 등)
- 수상 내역
- 파트너십 인증
- ISO 인증

---

### 2.9 Testimonial Area (고객 후기) 영역
**파일 위치**: 라인 987-1220

고객 리뷰 및 추천사를 관리합니다.

```html
<!-- 기본 구조 -->
<div class="pp-testimonial-item">
    <div class="pp-testimonial-content mb-35">
        <p>"후기 내용"</p>
    </div>
    <div class="pp-testimonial-author-wrapper">
        <div class="pp-testimonial-author-thumb">
            <img src="assets/img/testimonial/author-1.png" alt="">
        </div>
        <div class="pp-testimonial-author-info">
            <h3 class="pp-testimonial-author-title">고객명</h3>
            <span class="pp-testimonial-author-designation">직책, 회사명</span>
        </div>
    </div>
</div>
```

**준비물**:
- 고객사 로고 또는 담당자 사진
- 추천사 텍스트
- 고객명, 직책, 회사명

---

### 2.10 Footer (푸터) 영역
**파일 위치**: 라인 1293-1354

#### 회사 정보 변경
```html
<!-- 연락처 정보 업데이트 -->
<p>주소: 서울시 강남구 테헤란로 123</p>
<p>전화: 02-1234-5678</p>
<p>이메일: info@yourcompany.com</p>
```

#### 소셜 미디어 링크
```html
<!-- 수정 전 -->
<a href="#"><i class="fab fa-facebook-f"></i></a>

<!-- 수정 후 -->
<a href="https://www.facebook.com/yourcompany"><i class="fab fa-facebook-f"></i></a>
```

#### 저작권 정보
```html
<!-- 수정 전 (라인 1350 근처) -->
<p>© 2024 Agntix. All Rights Reserved</p>

<!-- 수정 후 -->
<p>© 2024 회사명. All Rights Reserved</p>
```

---

## 3. 이미지 및 로고 교체

### 3.1 필수 이미지 목록

| 이미지 유형 | 파일명 | 권장 크기 | 위치 |
|------------|--------|----------|------|
| 로고 (흰색) | `logo-white.png` | 120-150px 너비 | `assets/img/logo/` |
| 로고 (검정) | `logo-black.png` | 120-150px 너비 | `assets/img/logo/` |
| 파비콘 | `favicon.png` | 32x32px | `assets/img/favicon/` |
| 히어로 배경 | `hero-bg.jpg` | 1920x1080px | `assets/img/home-14/hero/` |
| 히어로 썸네일 | `hero-thumb.png` | 800x600px | `assets/img/home-14/hero/` |

### 3.2 프로젝트 이미지

| 항목 | 권장 크기 | 형식 | 저장 위치 |
|------|----------|------|----------|
| 포트폴리오 썸네일 | 800x600px | JPG/PNG | `assets/img/projects/` |
| 클라이언트 로고 | 150x80px | PNG | `assets/img/brand/` |
| 팀원 사진 | 400x400px | JPG/PNG | `assets/img/team/` |

### 3.3 이미지 최적화 가이드

1. **압축**: TinyPNG, ImageOptim 등 사용
2. **형식**:
   - 로고: PNG (투명 배경)
   - 사진: JPG (품질 80-90%)
   - 아이콘: SVG 또는 PNG
3. **반응형**: 2x 이미지 준비 (@2x.png)

---

## 4. 색상 및 스타일 커스터마이징

### 4.1 주요 색상 변경
**파일**: `assets/css/main.css` 또는 별도 커스텀 CSS 파일 생성

```css
/* 기본 브랜드 컬러 변경 */
:root {
    --tp-theme-primary: #your-color;
    --tp-theme-secondary: #your-color;
    --tp-common-white: #ffffff;
    --tp-common-black: #000000;
}
```

### 4.2 커스텀 CSS 파일 생성
새 파일 생성: `assets/css/custom.css`

```html
<!-- index-personal-portfolio-light.html의 </head> 직전에 추가 -->
<link rel="stylesheet" href="assets/css/custom.css">
```

---

## 5. 메뉴 구조 변경

### 5.1 메인 네비게이션 수정
**파일 위치**: 라인 185-259 (Mobile Menu)

```html
<!-- 메뉴 항목 예시 -->
<li><a href="index.html">홈</a></li>
<li><a href="about.html">회사소개</a></li>
<li class="has-dropdown">
    <a href="#">서비스</a>
    <ul class="tp-submenu submenu">
        <li><a href="service-1.html">디지털 마케팅</a></li>
        <li><a href="service-2.html">웹 개발</a></li>
        <li><a href="service-3.html">브랜드 전략</a></li>
    </ul>
</li>
<li><a href="portfolio.html">포트폴리오</a></li>
<li><a href="contact.html">문의하기</a></li>
```

### 5.2 Offcanvas 메뉴 동기화
Offcanvas 메뉴도 동일하게 수정 필요 (라인 92-93 근처)

---

## 📌 체크리스트

### 필수 수정 사항
- [ ] 페이지 제목 및 메타 정보
- [ ] 로고 교체 (흰색/검정)
- [ ] 파비콘 변경
- [ ] 히어로 영역 텍스트 (메인 카피, 회사명)
- [ ] 연락처 정보 (이메일, 전화, 주소)
- [ ] 서비스 항목
- [ ] 푸터 정보 및 저작권

### 추천 수정 사항
- [ ] 히어로 배경 이미지
- [ ] 클라이언트/파트너 로고
- [ ] 프로젝트 포트폴리오
- [ ] 고객 후기
- [ ] 수상 및 인증
- [ ] 소셜 미디어 링크
- [ ] 브랜드 컬러 커스터마이징

### 최적화 작업
- [ ] 이미지 압축 및 최적화
- [ ] SEO 메타 태그 추가
- [ ] 반응형 테스트 (모바일/태블릿)
- [ ] 브라우저 호환성 테스트
- [ ] 로딩 속도 최적화

---

## 🔧 다음 단계

1. **백업**: 원본 파일 백업
2. **단계별 수정**: 섹션별로 하나씩 수정
3. **테스트**: 각 수정 후 브라우저에서 확인
4. **최적화**: 이미지 압축, 코드 정리
5. **최종 검수**: 전체 페이지 기능 테스트

---

## ❓ 자주 묻는 질문

**Q: RTL을 LTR로 바꾸면 레이아웃이 깨지나요?**
A: CSS 파일도 함께 수정해야 합니다. `agntix-rtl` 폴더 대신 일반 폴더의 파일 사용 권장.

**Q: 섹션을 추가하거나 삭제할 수 있나요?**
A: 네, HTML 블록 단위로 추가/삭제 가능합니다. 단, CSS/JS 의존성 확인 필요.

**Q: 모바일에서 레이아웃이 깨져요**
A: 반응형 클래스(`col-lg-6`, `d-none d-md-block` 등) 확인 필요.

---

**작성일**: 2024
**템플릿 버전**: Agntix v1.0
