# Header & Footer 구조 분석

## 📍 위치

### Header
- **시작 라인**: 183
- **종료 라인**: 290
- **총 라인**: 107줄

### Footer
- **Footer Main**: 1322 ~ 1361 (39줄)
- **Footer Copyright**: 1363 ~ 1383 (20줄)
- **총 라인**: 61줄

---

## 🔝 Header 구조 분석

### 전체 구조
```html
<!-- header area start -->
<div class="tp-header-14-area header-transparent tp-header-light">
    <div class="container container-1800">
        <div class="row">
            <div class="col-xl-12">
                <!-- 헤더 래퍼 -->
                <div class="tp-header-14-wrapper">
                    <!-- 왼쪽: 로고 -->
                    <div class="tp-header-14-left">
                        ...
                    </div>
                    <!-- 오른쪽: 이메일 + 메뉴 버튼 -->
                    <div class="tp-header-14-right">
                        ...
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 모바일 메뉴 (숨김) -->
<nav class="tp-mobile-menu-active d-none">
    ...
</nav>
<!-- header area end -->
```

### 📊 Header 컴포넌트

#### 1. 헤더 컨테이너
```html
<div class="tp-header-14-area header-transparent tp-header-light">
```
- **클래스 설명**:
  - `tp-header-14-area`: 헤더 14번 스타일 (템플릿 고유)
  - `header-transparent`: 투명 배경
  - `tp-header-light`: 라이트 테마 (흰색 텍스트)

#### 2. 왼쪽 영역 (로고)
```html
<div class="tp-header-14-left">
    <div class="tp-header-logo">
        <a href="index.html">
            <img data-width="120"
                 src="assets/img/logo/logo-white.png"
                 alt="">
        </a>
    </div>
</div>
```
- **로고 이미지**: `assets/img/logo/logo-white.png`
- **권장 너비**: 120px
- **링크**: `index.html` (홈페이지)

#### 3. 오른쪽 영역 (이메일 + 메뉴)
```html
<div class="tp-header-14-right d-flex align-items-center">
    <!-- 이메일 (데스크톱에서만 보임) -->
    <div class="tp-header-14-info d-none d-md-block">
        <a class="tp-line-white" href="mailto:contact@codeb.kr">
            contact@codeb.kr
        </a>
    </div>

    <!-- 메뉴 버튼 -->
    <div class="tp-header-14-bar-wrap ml-20">
        <button class="tp-header-8-bar tp-offcanvas-open-btn">
            <span>Menu</span>
            <span>
                <svg>햄버거 아이콘</svg>
            </span>
        </button>
    </div>
</div>
```

**이메일 표시**:
- **클래스**: `d-none d-md-block`
- **의미**: 모바일에서 숨김, 태블릿(md) 이상에서 표시
- **현재 값**: `contact@codeb.kr`

**메뉴 버튼**:
- 클릭 시 Offcanvas 메뉴 열림
- 햄버거 아이콘 SVG 포함

---

### 📱 모바일 메뉴 구조

```html
<nav class="tp-mobile-menu-active d-none">
    <ul>
        <li class="has-dropdown">
            <a href="#">Home</a>
            <ul class="tp-submenu submenu">
                <li><a href="...">Modern Agency</a></li>
                ...
            </ul>
        </li>
        ...
    </ul>
</nav>
```

#### 메뉴 항목 (기본 템플릿)
1. **Home** (8개 하위 메뉴)
2. **Pages** (10개 하위 메뉴)
3. **Projects** (7개 하위 메뉴)
4. **Blog** (5개 하위 메뉴)
5. **Shop** (7개 하위 메뉴)
6. **Contact** (3개 하위 메뉴)

---

## 🔽 Footer 구조 분석

### 전체 구조
```html
<!-- footer area start -->
<div class="pp-footer-area pp-footer-ptb pt-115">
    <div class="container container-1750">
        <div class="pp-footer-box">
            <!-- Footer 메인 콘텐츠 -->
            <div class="pp-footer-wrapper text-center">
                <span>서브타이틀</span>
                <h4>메인 타이틀 (이메일)</h4>
                <div class="pp-footer-btn-box">
                    <a>버튼 1</a>
                    <a>버튼 2</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- footer area end -->

<!-- footer copyright area start -->
<div class="pp-footer-copyright-area pp-footer-copyright-ptb">
    <div class="container container-1430">
        <!-- 3분할 저작권 -->
        <div class="pp-footer-copyright-wrap">
            <div>© 2025 codeB...</div>
            <div>Your Digital Team...</div>
            <div>기술로 실행력을...</div>
        </div>
    </div>
</div>
<!-- footer copyright area end -->
```

### 📊 Footer 컴포넌트

#### 1. Footer 메인 영역
```html
<div class="pp-footer-area pp-footer-ptb pt-115">
```
- **클래스**:
  - `pp-footer-area`: Personal Portfolio 푸터
  - `pp-footer-ptb`: 패딩 상하
  - `pt-115`: 상단 패딩 115px

#### 2. Footer 콘텐츠 (중앙 정렬)
```html
<div class="pp-footer-wrapper text-center">
    <!-- 서브타이틀 -->
    <span class="pp-footer-subtitle tp_fade_anim">
        지금, 당신의 디지털 팀을 새롭게 만들어보세요.
    </span>

    <!-- 메인 타이틀 (이메일) -->
    <h4 class="pp-footer-title tp_fade_anim not-hide-cursor"
        data-cursor="Send<br>Mail">
        <a class="codetext cursor-hide"
           href="mailto:contact@codeb.kr">
            contact@codeb.kr
        </a>
    </h4>

    <!-- CTA 버튼 2개 -->
    <div class="pp-footer-btn-box d-flex justify-content-center">
        <a class="pp-footer-btn mr-15" href="contact-me-light.html">
            프로젝트 상담하기
        </a>
        <a class="pp-footer-btn" href="portfolio-masonry-light.html">
            포트폴리오 보기
        </a>
    </div>
</div>
```

**구성 요소**:
1. **서브타이틀**: 캐치프레이즈
2. **메인 타이틀**: 이메일 주소 (클릭 시 메일 앱 실행)
3. **CTA 버튼**: 2개 (상담하기, 포트폴리오)

#### 3. Copyright 영역 (3분할 레이아웃)
```html
<div class="pp-footer-copyright-wrap">
    <!-- 왼쪽 -->
    <div class="pp-footer-copyright-text">
        <p>© 2025 codeB. All rights reserved</p>
    </div>

    <!-- 중앙 -->
    <div class="pp-footer-copyright-text-center">
        <p>Your Digital Team, Reimagined</p>
    </div>

    <!-- 오른쪽 -->
    <div class="pp-footer-copyright-text">
        <p>기술로 실행력을, 실행력으로 성과를.</p>
    </div>
</div>
```

**레이아웃**:
- 3등분 Flexbox 레이아웃
- 왼쪽: 저작권
- 중앙: 메인 슬로건
- 오른쪽: 서브 슬로건

---

## 🎨 스타일링 정보

### Header 스타일
```css
.tp-header-14-area {
    position: fixed; /* 상단 고정 */
    width: 100%;
    z-index: 999;
}

.header-transparent {
    background: transparent; /* 투명 배경 */
}

.tp-header-light {
    color: white; /* 흰색 텍스트 */
}
```

### Footer 스타일
```css
.pp-footer-area {
    background: var(--footer-bg);
    text-align: center;
}

.pp-footer-copyright-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

## 📱 반응형 동작

### Header 반응형
| 화면 크기 | 이메일 표시 | 메뉴 |
|-----------|------------|------|
| **Desktop** (1024px+) | ✅ 표시 | 햄버거 메뉴 |
| **Tablet** (768px~1023px) | ✅ 표시 | 햄버거 메뉴 |
| **Mobile** (767px 이하) | ❌ 숨김 | 햄버거 메뉴 |

**클래스**: `d-none d-md-block`
- `d-none`: 기본 숨김
- `d-md-block`: md(768px) 이상에서 표시

### Footer 반응형
- **Desktop**: 3분할 가로 배치
- **Tablet**: 3분할 유지
- **Mobile**: 세로 스택 (예상)

---

## 🔧 커스터마이징 포인트

### Header 수정 가능 요소
1. **로고**: 라인 191
   - 파일: `assets/img/logo/logo-white.png`
   - 너비: 120px

2. **이메일**: 라인 196
   - 현재: `contact@codeb.kr`

3. **메뉴 버튼 텍스트**: 라인 200
   - 현재: "Menu"
   - 한글로 변경 가능: "메뉴"

4. **모바일 메뉴**: 라인 216~289
   - 메뉴 항목 추가/삭제/수정

### Footer 수정 가능 요소
1. **서브타이틀**: 라인 1329
   - 현재: "지금, 당신의 디지털 팀을..."

2. **이메일**: 라인 1331
   - 현재: `contact@codeb.kr`

3. **CTA 버튼**: 라인 1335, 1345
   - 버튼 1: "프로젝트 상담하기"
   - 버튼 2: "포트폴리오 보기"

4. **Copyright**: 라인 1370, 1373, 1376
   - 3개 텍스트 블록

---

## 🎯 codeB 맞춤 메뉴 제안

### 추천 메뉴 구조
```
┌─ 홈
├─ 회사소개
│  ├─ About codeB
│  ├─ 팀 소개
│  └─ 연혁
├─ 서비스
│  ├─ 모듈형 CMS
│  ├─ 관리자 시스템
│  ├─ 쇼핑몰 솔루션
│  └─ 유지보수
├─ 포트폴리오
│  ├─ 전체 프로젝트
│  └─ 산업별 보기
└─ 문의하기
   ├─ 프로젝트 문의
   └─ 견적 요청
```

---

## 📝 수정 예시

### 모바일 메뉴를 codeB용으로 변경
```html
<nav class="tp-mobile-menu-active d-none">
    <ul>
        <li><a href="index.html">홈</a></li>

        <li class="has-dropdown">
            <a href="#">회사소개</a>
            <ul class="tp-submenu submenu">
                <li><a href="about.html">About codeB</a></li>
                <li><a href="team.html">팀 소개</a></li>
            </ul>
        </li>

        <li class="has-dropdown">
            <a href="#">서비스</a>
            <ul class="tp-submenu submenu">
                <li><a href="service-cms.html">모듈형 CMS</a></li>
                <li><a href="service-admin.html">관리자 시스템</a></li>
                <li><a href="service-shop.html">쇼핑몰 솔루션</a></li>
            </ul>
        </li>

        <li><a href="portfolio.html">포트폴리오</a></li>
        <li><a href="contact.html">문의하기</a></li>
    </ul>
</nav>
```

---

## 🚀 다음 단계

1. **메뉴 간소화**: 불필요한 템플릿 메뉴 제거
2. **로고 교체**: codeB 로고 준비 및 적용
3. **Footer CTA 링크**: 실제 페이지로 연결
4. **모바일 최적화**: 메뉴 항목 한국어화

---

**구조 분석 완료!** 📊
