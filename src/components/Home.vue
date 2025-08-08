<template>
  <div class="home-container">
    <!-- 히어로 섹션 with 이미지 슬라이드 -->
    <section class="hero-section">
      <div class="hero-slider">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['slide', { active: currentSlide === index }]"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <button class="cta-button" @click="scrollToFeatures">
              {{ slide.buttonText }}
            </button>
          </div>
        </div>

        <!-- 슬라이드 네비게이션 -->
        <div class="slider-nav">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            :class="['nav-dot', { active: currentSlide === index }]"
            @click="goToSlide(index)"
          ></button>
        </div>

        <!-- 이전/다음 버튼 -->
        <button class="slider-btn prev" @click="prevSlide">‹</button>
        <button class="slider-btn next" @click="nextSlide">›</button>
      </div>
    </section>

    <!-- 서비스 소개 섹션 -->
    <section class="services-section" ref="featuresRef">
      <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div v-for="service in services" :key="service.id" class="service-card">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 통계 섹션 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.id" class="stat-item">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Get Started?</h2>
        <p>최첨단 fleet 관리 시스템으로 비즈니스를 한 단계 발전시켜보세요.</p>
        <router-link to="/contact" class="cta-button">문의하기</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '../styles/home.css'

const currentSlide = ref(0)
const featuresRef = ref(null)
let slideInterval = null

// 슬라이드 데이터
const slides = ref([
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'AllFleet - 차량 관리의 혁신',
    description: '첨단 기술로 운송 효율성을 극대화하고 비용을 절감하세요.',
    buttonText: '서비스 알아보기'
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: '실시간 모니터링',
    description: 'GPS 추적과 실시간 데이터로 차량을 완벽하게 관리하세요.',
    buttonText: '기능 살펴보기'
  },
  {
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: '데이터 기반 최적화',
    description: 'AI 분석으로 최적의 운송 경로와 스케줄을 제안받으세요.',
    buttonText: '시작하기'
  }
])

// 서비스 데이터
const services = ref([
  {
    id: 1,
    icon: '🚛',
    title: '차량 추적',
    description: 'GPS 기반 실시간 차량 위치 추적 및 경로 최적화'
  },
  {
    id: 2,
    icon: '📊',
    title: '데이터 분석',
    description: '운행 데이터 분석을 통한 효율성 개선 및 비용 절감'
  },
  {
    id: 3,
    icon: '🔧',
    title: '정비 관리',
    description: '예방적 정비 스케줄링으로 차량 상태 최적화'
  },
  {
    id: 4,
    icon: '📱',
    title: '모바일 앱',
    description: '언제 어디서나 차량 상태를 모니터링할 수 있는 앱'
  },
  {
    id: 5,
    icon: '⛽',
    title: '연료 관리',
    description: '연료 소비량 모니터링 및 주유소 최적 경로 안내'
  },
  {
    id: 6,
    icon: '👥',
    title: '운전자 관리',
    description: '운전자 스케줄링 및 성과 분석을 통한 안전 운행'
  }
])

// 통계 데이터
const stats = ref([
  { id: 1, number: '500+', label: '관리 차량' },
  { id: 2, number: '150+', label: '파트너 기업' },
  { id: 3, number: '99.9%', label: '서비스 가동률' },
  { id: 4, number: '24/7', label: '고객 지원' }
])

// 슬라이드 함수들
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const scrollToFeatures = () => {
  if (featuresRef.value) {
    featuresRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

// 자동 슬라이드
const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 5000) // 5초마다 자동 슬라이드
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>
