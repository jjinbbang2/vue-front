# AllFleet 프로젝트 기여 가이드

AllFleet Vue.js 프로젝트에 기여해주셔서 감사합니다! 🎉

## 🚀 시작하기

### 개발 환경 설정
```bash
# 1. 레포지토리 클론
git clone https://github.com/your-username/allfleet-vuejs.git
cd allfleet-vuejs

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저에서 http://localhost:5173 접속
```

### 브랜치 전략
- `main`: 프로덕션 배포용 브랜치
- `develop`: 개발용 메인 브랜치
- `feature/기능명`: 새 기능 개발
- `fix/버그명`: 버그 수정
- `docs/문서명`: 문서 업데이트

## 📋 코딩 가이드라인

### Vue.js 컴포넌트 작성 규칙

```vue
<template>
  <!-- Semantic HTML 사용 -->
  <section class="component-container">
    <h1>제목</h1>
    <!-- 이미지에는 반드시 alt 속성 -->
    <img src="image.jpg" alt="설명" />
  </section>
</template>

<script setup>
// Composition API 필수 사용
import { ref, reactive, onMounted } from 'vue'

// 데이터는 ref 또는 reactive 사용
const data = ref('')
const form = reactive({})

// 함수는 camelCase
const handleSubmit = () => {}

onMounted(() => {})
</script>

<style scoped>
/* 반드시 scoped 스타일 사용 */
.component-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 반응형 필수 */
@media (max-width: 768px) {
  .component-container {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  /* 모바일 스타일 */
}
</style>
```

### 네이밍 규칙
- **컴포넌트**: `PascalCase` (예: `Header.vue`, `ContactForm.vue`)
- **변수/함수**: `camelCase` (예: `submitForm`, `userData`)
- **CSS 클래스**: `kebab-case` (예: `.nav-item`, `.contact-form`)
- **라우트**: `kebab-case` (예: `/about-us`, `/contact`)

### 필수 체크사항
- [ ] Composition API (`<script setup>`) 사용
- [ ] Scoped 스타일 (`<style scoped>`) 사용
- [ ] 반응형 디자인 (768px, 480px 브레이크포인트)
- [ ] 최대 너비 1200px 컨테이너
- [ ] Semantic HTML 요소 사용
- [ ] 이미지 alt 속성 필수
- [ ] 접근성 고려 (ARIA 레이블, 색상 대비)

## 🔄 개발 워크플로

### 1. 이슈 생성
새로운 기능이나 버그 수정 전에 이슈를 먼저 생성해주세요.
- 🐛 버그 리포트: `.github/ISSUE_TEMPLATE/bug_report.yml` 사용
- ✨ 기능 요청: `.github/ISSUE_TEMPLATE/feature_request.yml` 사용

### 2. 브랜치 생성
```bash
# 기능 개발
git checkout -b feature/새로운-기능

# 버그 수정
git checkout -b fix/버그-설명

# 문서 업데이트
git checkout -b docs/문서-업데이트
```

### 3. 개발 & 커밋
```bash
# 컨벤션에 맞는 커밋 메시지
git commit -m "feat: Contact 페이지에 카카오맵 추가"
git commit -m "fix: 모바일에서 네비게이션 버그 수정"
git commit -m "style: Home 컴포넌트 반응형 디자인 개선"
git commit -m "docs: README에 설치 가이드 추가"
```

**커밋 컨벤션:**
- `feat`: 새 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, UI 스타일
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드 설정 등

### 4. Pull Request 생성
- PR 템플릿 체크리스트를 모두 확인
- 스크린샷 첨부 (UI 변경 시)
- 관련 이슈 번호 연결

## 🧪 테스트 가이드

### 로컬 테스트
```bash
# 빌드 테스트
npm run build

# 프리뷰 (빌드된 앱 확인)
npm run preview
```

### 브라우저 테스트
- **데스크톱**: Chrome, Firefox, Safari, Edge
- **모바일**: iOS Safari, Android Chrome
- **반응형**: 1200px, 768px, 480px에서 테스트

### 접근성 테스트
- 키보드만으로 네비게이션 가능한지 확인
- 스크린 리더 호환성 확인
- 색상 대비 비율 확인 (4.5:1 이상)

## 🚨 자동 품질 검사

Push 시 자동으로 실행되는 검사들:

### 1. 코드 품질 검사
- Vue.js 컴포넌트 구조 확인
- Composition API 사용 여부
- Scoped 스타일 적용 여부
- 반응형 디자인 적용 여부
- 네이밍 규칙 준수 여부

### 2. 접근성 검사
- 이미지 alt 속성 확인
- ARIA 레이블 사용 확인
- Semantic HTML 사용 확인

### 3. 성능 검사
- 이미지 최적화 확인
- 불필요한 import 확인
- 인라인 스타일 사용 여부

### 4. 보안 검사
- npm audit 실행
- 민감한 데이터 노출 확인

## 📞 문의 및 도움

- **이슈**: GitHub Issues 사용
- **논의**: GitHub Discussions 사용
- **긴급 사항**: contact@allfleet.kr

## 🎯 기여 인정

모든 기여자는 README의 Contributors 섹션에 추가됩니다. 감사합니다! 🙏

---

**Happy Coding! 🚀**
