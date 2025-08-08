<template>
  <div class="features-container">
    <div class="features-header">
      <div class="container">
        <h1>우리의 기능</h1>
        <p>AllFleet이 차량 관리 분야 최고의 선택인 이유를 알아보세요</p>
      </div>
    </div>

    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚛</div>
          <h3>실시간 차량 추적</h3>
          <p>GPS 추적 기술로 전체 차량을 실시간 모니터링하세요. 언제든지 차량의 정확한 위치를 파악할 수 있습니다.</p>
          <ul class="feature-benefits">
            <li>실시간 GPS 위치 추적</li>
            <li>경로 최적화 알고리즘</li>
            <li>교통 상황 반영</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>고급 데이터 분석</h3>
          <p>운전자 행동, 차량 성능, 운영 효율성에 대한 포괄적인 보고서로 상세한 인사이트를 얻으세요.</p>
          <ul class="feature-benefits">
            <li>운전 패턴 분석</li>
            <li>비용 절감 제안</li>
            <li>성과 대시보드</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔧</div>
          <h3>정비 스케줄링</h3>
          <p>자동화된 정비 알림과 스케줄링으로 차량을 원활하게 운영하고 다운타임을 줄이세요.</p>
          <ul class="feature-benefits">
            <li>예방적 정비 알림</li>
            <li>부품 교체 주기 관리</li>
            <li>정비 이력 추적</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>모바일 앱</h3>
          <p>iOS 및 Android 기기에서 사용 가능한 모바일 애플리케이션으로 언제 어디서나 차량 데이터에 액세스하세요.</p>
          <ul class="feature-benefits">
            <li>실시간 알림</li>
            <li>원격 차량 제어</li>
            <li>오프라인 모드 지원</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⛽</div>
          <h3>연료 관리</h3>
          <p>연료 소비량 추적, 경로 최적화, 고급 연료 관리 시스템으로 운영 비용을 절감하세요.</p>
          <ul class="feature-benefits">
            <li>연료 소비량 모니터링</li>
            <li>효율적인 주유소 안내</li>
            <li>연비 최적화 팁</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>보안 및 안전</h3>
          <p>지오펜싱, 운전자 안전 모니터링, 응급 알림을 포함한 고급 보안 기능을 제공합니다.</p>
          <ul class="feature-benefits">
            <li>지역 기반 알림</li>
            <li>응급상황 자동 신고</li>
            <li>도난 방지 시스템</li>
          </ul>
        </div>
      </div>

      <div class="tech-specs">
        <h2>기술 사양</h2>
        <div class="specs-grid">
          <div class="spec-item">
            <div class="spec-title">업데이트 주기</div>
            <div class="spec-value">5초</div>
            <div class="spec-description">실시간 위치 업데이트</div>
          </div>
          <div class="spec-item">
            <div class="spec-title">정확도</div>
            <div class="spec-value">99.5%</div>
            <div class="spec-description">GPS 위치 정확도</div>
          </div>
          <div class="spec-item">
            <div class="spec-title">가동시간</div>
            <div class="spec-value">99.9%</div>
            <div class="spec-description">시스템 안정성</div>
          </div>
          <div class="spec-item">
            <div class="spec-title">지원 차량</div>
            <div class="spec-value">무제한</div>
            <div class="spec-description">확장 가능한 시스템</div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <div class="container">
        <h2>지금 시작해보세요</h2>
        <p>AllFleet의 강력한 기능으로 차량 관리를 혁신하세요</p>
        <router-link to="/contact" class="cta-button">무료 상담 받기</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import '../styles/features.css'
</script>
