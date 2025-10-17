# codeB 보라색 테마 컬러 가이드

## 🎨 테마 컬러 시스템

### 컬러 팔레트

codeB의 브랜드 아이덴티티를 위한 보라색 계열 컬러 시스템입니다.

| 변수명 | 색상 코드 | 용도 | 예시 |
|--------|----------|------|------|
| `--codeb-purple-primary` | `#8B5CF6` | 메인 브랜드 색상 | 버튼, 링크, 액센트 |
| `--codeb-purple-light` | `#A78BFA` | 밝은 보라 | 호버 효과, 하이라이트 |
| `--codeb-purple-dark` | `#7C3AED` | 진한 보라 | 버튼 호버, 강조 |
| `--codeb-purple-accent` | `#C4B5FD` | 연한 보라 | 배경, 서브 액센트 |
| `--codeb-purple-deep` | `#6D28D9` | 깊은 보라 | 그림자, 깊이감 |

---

## 📋 적용 범위

### 1. CSS 변수 오버라이드

기존 노란색 테마 변수를 보라색으로 자동 변환합니다.

```css
:root {
    /* 기존 노란색 변수 → 보라색으로 오버라이드 */
    --tp-common-yellow: var(--codeb-purple-primary);
    --tp-common-yellow-1: var(--codeb-purple-light);
    --tp-common-yellow-green: var(--codeb-purple-accent);
    --tp-theme-yellow: var(--codeb-purple-primary);
}
```

**장점**: 템플릿의 기존 CSS를 수정하지 않고도 색상이 자동으로 변경됩니다.

---

### 2. 주요 적용 요소

#### 🖱️ 인터랙티브 요소
- **커서 배경**: `.cursor-bg-yellow #ball`
- **버튼**: `.tp-btn-yellow`, `.tp-btn-yellow-green`
- **링크 호버**: `a:hover`, `.tp-line-white:hover`
- **Footer 버튼**: `.pp-footer-btn:hover`

#### 🎯 시각적 강조
- **테두리**: `.tp-border-yellow`, `.border-yellow`
- **텍스트 색상**: `.text-yellow`, `.tp-text-yellow`
- **배경색**: `.bg-yellow`, `.tp-bg-yellow`
- **그라데이션**: `.gradient-yellow`, `.tp-gradient-yellow`

#### 📦 컴포넌트
- **Service Item**: `.pp-service-item:hover`, `.pp-service-item.current`
- **Project Item**: `.pp-project-item:hover`
- **Hero 하이라이트**: `.pp-hero-text .highlight`
- **로딩 스피너**: `.preloader span`

#### 🧭 네비게이션
- **모바일 메뉴 액티브**: `.tp-mobile-menu-active li.is-active > a`
- **Offcanvas 호버**: `.tp-offcanvas-2-close-btn:hover`

---

## 🔧 커스터마이징 방법

### 색상 변경하기

`custom.css`의 CSS 변수만 수정하면 전체 테마 색상이 변경됩니다.

```css
:root {
    /* 메인 색상만 변경해도 전체 테마 변경 가능 */
    --codeb-purple-primary: #YOUR_COLOR; /* 원하는 색상으로 변경 */
    --codeb-purple-light: #YOUR_LIGHT_COLOR;
    --codeb-purple-dark: #YOUR_DARK_COLOR;
}
```

### 다른 색상 테마 예시

#### 🔵 파란색 테마
```css
--codeb-purple-primary: #3B82F6;  /* Blue 500 */
--codeb-purple-light: #60A5FA;    /* Blue 400 */
--codeb-purple-dark: #2563EB;     /* Blue 600 */
--codeb-purple-accent: #93C5FD;   /* Blue 300 */
--codeb-purple-deep: #1D4ED8;     /* Blue 700 */
```

#### 🟢 초록색 테마
```css
--codeb-purple-primary: #10B981;  /* Emerald 500 */
--codeb-purple-light: #34D399;    /* Emerald 400 */
--codeb-purple-dark: #059669;     /* Emerald 600 */
--codeb-purple-accent: #6EE7B7;   /* Emerald 300 */
--codeb-purple-deep: #047857;     /* Emerald 700 */
```

#### 🔴 빨간색 테마
```css
--codeb-purple-primary: #EF4444;  /* Red 500 */
--codeb-purple-light: #F87171;    /* Red 400 */
--codeb-purple-dark: #DC2626;     /* Red 600 */
--codeb-purple-accent: #FCA5A5;   /* Red 300 */
--codeb-purple-deep: #B91C1C;     /* Red 700 */
```

---

## 🎯 사용 가이드라인

### 색상 적용 우선순위

1. **Primary**: 메인 브랜드 액션 (버튼, 중요 링크)
2. **Light**: 호버 상태, 보조 강조
3. **Dark**: 버튼 호버, 활성 상태
4. **Accent**: 배경, 서브 요소
5. **Deep**: 그림자, 깊이감

### 접근성 고려사항

- **대비율**: 텍스트와 배경 사이 최소 4.5:1 (WCAG AA)
- **호버 상태**: 충분히 구분 가능한 색상 변화
- **Focus 상태**: 키보드 네비게이션을 위한 포커스 표시

### 권장 조합

```css
/* ✅ 좋은 예: 충분한 대비 */
.button {
    background: var(--codeb-purple-primary); /* #8B5CF6 */
    color: #FFFFFF; /* 흰색 텍스트 */
}

/* ❌ 나쁜 예: 낮은 대비 */
.button {
    background: var(--codeb-purple-accent); /* #C4B5FD */
    color: #FFFFFF; /* 대비 부족 */
}
```

---

## 📂 파일 구조

### custom.css 구조

```
custom.css
├── 폰트 설정 (@font-face)
├── CSS 변수 정의 (:root)
│   ├── 폰트 변수
│   └── 컬러 변수 (보라색 테마) ← 여기서 색상 정의
├── 전역 폰트 적용
├── 한국어 타이포그래피 최적화
├── 반응형 설정
└── 테마 컬러 오버라이드 ← 여기서 색상 적용
```

---

## 🔄 변경 이력

### v1.0.0 (2025-10-17)
- ✅ 노란색 테마 → 보라색 테마 전환
- ✅ CSS 변수 시스템 구축
- ✅ 전역 컬러 오버라이드 적용
- ✅ 인터랙티브 요소 색상 변경
- ✅ 반응형 호환성 확인

---

## 🛠️ 유지보수

### 새로운 요소에 테마 적용하기

1. **HTML에 기존 클래스 사용**
   ```html
   <!-- 자동으로 보라색 적용됨 -->
   <button class="tp-btn-yellow">버튼</button>
   ```

2. **새 CSS 클래스 생성**
   ```css
   .custom-element {
       color: var(--codeb-purple-primary);
       border-color: var(--codeb-purple-primary);
   }

   .custom-element:hover {
       background-color: var(--codeb-purple-light);
   }
   ```

3. **!important 사용 최소화**
   - 기존 템플릿 오버라이드만 `!important` 사용
   - 새로운 스타일은 specificity로 우선순위 조정

---

## 🎨 디자인 시스템 통합

### Figma / Sketch 색상 변수

디자인 툴에서 동일한 색상 시스템 사용:

```
Primary Purple:   #8B5CF6
Light Purple:     #A78BFA
Dark Purple:      #7C3AED
Accent Purple:    #C4B5FD
Deep Purple:      #6D28D9
```

### Tailwind CSS 호환

Tailwind를 사용한다면:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'codeb-purple': {
          primary: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          accent: '#C4B5FD',
          deep: '#6D28D9',
        }
      }
    }
  }
}
```

---

## 📖 참고 자료

- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **WCAG Contrast**: https://webaim.org/resources/contrastchecker/
- **Color Palette Generator**: https://coolors.co/

---

## ✅ 체크리스트

테마 색상 적용 시 확인사항:

- [ ] CSS 변수 정의 확인
- [ ] 모든 페이지에서 색상 일관성 확인
- [ ] 호버/액티브 상태 동작 확인
- [ ] 모바일/태블릿/데스크톱 반응형 확인
- [ ] 다크모드 호환성 (선택사항)
- [ ] 브라우저 호환성 (Chrome, Safari, Firefox, Edge)
- [ ] 접근성 대비율 검증

---

**작성일**: 2025-10-17
**버전**: 1.0.0
**담당**: codeB Development Team
