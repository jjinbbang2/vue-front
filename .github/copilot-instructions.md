# GitHub Copilot Instructions for AllFleet Vue.js Project

## 프로젝트 개요
이 프로젝트는 AllFleet 기업 웹사이트로, Vue.js 3 (Composition API)와 Vue Router를 사용하여 구축된 반응형 웹 애플리케이션입니다.

## 기술 스택
- **Frontend**: Vue.js 3 (Composition API)
- **라우팅**: Vue Router
- **빌드 도구**: Vite
- **스타일링**: CSS (Scoped Styles)
- **지도 서비스**: 카카오맵 API
- **디자인**: 반응형 웹 디자인

## 코딩 스타일 가이드

### Vue.js 컴포넌트
```vue
<template>
  <!-- HTML 구조는 semantic HTML 사용 -->
</template>

<script setup>
// Composition API 사용
import { ref, reactive, onMounted } from 'vue'

// 데이터는 ref 또는 reactive 사용
const data = ref('')
const form = reactive({})

// 함수는 camelCase 사용
const handleSubmit = () => {}

// lifecycle hooks
onMounted(() => {})
</script>

<style scoped>
/* scoped 스타일 사용 */
/* 반응형 디자인 필수 */
</style>
```

### 네이밍 규칙
- **컴포넌트 파일**: PascalCase (예: `Header.vue`, `Contact.vue`)
- **변수/함수**: camelCase (예: `submitForm`, `userData`)
- **CSS 클래스**: kebab-case (예: `.contact-container`, `.nav-item`)
- **라우트 경로**: kebab-case (예: `/about-us`, `/contact`)

### 디렉토리 구조
```
src/
├── components/     # 재사용 가능한 컴포넌트
├── router/        # 라우팅 설정
├── assets/        # 정적 파일 (이미지, 아이콘 등)
└── style.css      # 전역 스타일
```

## 개발 가이드라인

### 1. 반응형 디자인
- 모든 컴포넌트는 반응형으로 개발
- 브레이크포인트: 768px (태블릿), 480px (모바일)
- 최대 너비: 1200px (컨테이너)

### 2. 스타일링 규칙
```css
/* 기본 컨테이너 스타일 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 반응형 미디어 쿼리 */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  /* 모바일 스타일 */
}
```

### 3. 컴포넌트 개발
- 각 페이지는 별도의 컴포넌트로 분리
- 재사용 가능한 UI 요소는 components 폴더에 분리
- props와 events는 명확히 정의
- scoped 스타일 사용

### 4. 라우팅
```javascript
// router/index.js 패턴
const routes = [
  { path: '/', component: Home },
  { path: '/features', component: Features },
  { path: '/contact', component: Contact }
]
```

### 5. API 통합
- 카카오맵 API 사용 시 환경변수 활용
- 외부 서비스 통합 시 에러 핸들링 포함
- async/await 패턴 사용

## 특별 지침

### 네비게이션
- 햄버거 메뉴는 768px 이하에서 활성화
- 메뉴 슬라이드 애니메이션 포함
- 현재 페이지 활성 상태 표시

### 카카오맵 통합
```javascript
// 카카오맵 초기화 패턴
const initKakaoMap = () => {
  if (typeof kakao !== 'undefined' && kakao.maps) {
    // 지도 초기화 로직
  } else {
    console.warn('카카오맵 API가 로드되지 않았습니다.');
  }
}
```

### 폼 처리
- v-model을 사용한 양방향 바인딩
- 폼 유효성 검사 포함
- 제출 후 피드백 제공

## 성능 최적화

1. **이미지 최적화**
   - WebP 형식 우선 사용
   - 적절한 크기로 리사이징
   - lazy loading 적용

2. **코드 분할**
   - 라우트 기반 코드 분할
   - 동적 import 사용

3. **번들 크기 최적화**
   - 필요한 라이브러리만 import
   - tree shaking 활용

## 접근성 (A11y)

- semantic HTML 요소 사용
- alt 속성 필수 포함
- 키보드 네비게이션 지원
- 적절한 색상 대비 유지
- ARIA 레이블 사용

## 브라우저 지원

- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)

## 개발 도구

- **개발 서버**: `npm run dev`
- **빌드**: `npm run build`
- **미리보기**: `npm run preview`

## 커밋 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 설정 등
```

예시: `feat: Contact 페이지에 카카오맵 추가`

## 주의사항

1. **API 키 보안**
   - 카카오맵 API 키는 환경변수로 관리
   - .env 파일은 .gitignore에 추가

2. **크로스 브라우저 테스트**
   - 주요 브라우저에서 기능 테스트 필수

3. **성능 모니터링**
   - 페이지 로딩 시간 최적화
   - 이미지 로딩 최적화

이 지침을 따라 일관성 있고 고품질의 코드를 작성해 주세요.
