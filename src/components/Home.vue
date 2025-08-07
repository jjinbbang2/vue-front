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

<style scoped>
.home-container {
  width: 100%;
}

/* 히어로 섹션 */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide.active {
  opacity: 1;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.slide-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

.slide-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.slide-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.cta-button {
  background: #007bff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.cta-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
}

/* 슬라이드 네비게이션 */
.slider-nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 3;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background: white;
}

/* 이전/다음 버튼 */
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.slider-btn.prev {
  left: 2rem;
}

.slider-btn.next {
  right: 2rem;
}

/* 서비스 섹션 */
.services-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

/* 통계 섹션 */
.stats-section {
  padding: 4rem 0;
  background: #007bff;
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* CTA 섹션 */
.cta-section {
  padding: 5rem 0;
  background: #333;
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .slide-content h1 {
    font-size: 2.5rem;
  }

  .slide-content p {
    font-size: 1.1rem;
  }

  .slider-btn {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .slider-btn.prev {
    left: 1rem;
  }

  .slider-btn.next {
    right: 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .services-section h2,
  .cta-section h2 {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 70vh;
  }

  .slide-content h1 {
    font-size: 2rem;
  }

  .slide-content p {
    font-size: 1rem;
  }

  .slide-content {
    padding: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
