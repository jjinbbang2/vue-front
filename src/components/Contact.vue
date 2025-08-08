<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p>언제든지 문의해 주세요. 최선을 다해 도와드리겠습니다.</p>
    </div>

    <div class="contact-content">
      <!-- 연락처 정보 -->
      <div class="contact-info">
        <div class="info-section">
          <h2>연락처 정보</h2>
          <div class="info-item">
            <i class="icon">📍</i>
            <div>
              <h3>주소</h3>
              <p>서울특별시 강남구 테헤란로 123<br>AllFleet 빌딩 10층</p>
            </div>
          </div>
          <div class="info-item">
            <i class="icon">📞</i>
            <div>
              <h3>전화번호</h3>
              <p>02-1234-5678</p>
            </div>
          </div>
          <div class="info-item">
            <i class="icon">✉️</i>
            <div>
              <h3>이메일</h3>
              <p>contact@allfleet.kr</p>
            </div>
          </div>
          <div class="info-item">
            <i class="icon">🕒</i>
            <div>
              <h3>운영시간</h3>
              <p>평일: 09:00 - 18:00<br>주말 및 공휴일: 휴무</p>
            </div>
          </div>
        </div>

        <!-- 문의 폼 -->
        <div class="contact-form">
          <h2>문의하기</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">이름</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="email">이메일</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
              <label for="phone">전화번호</label>
              <input type="tel" id="phone" v-model="form.phone">
            </div>
            <div class="form-group">
              <label for="subject">제목</label>
              <input type="text" id="subject" v-model="form.subject" required>
            </div>
            <div class="form-group">
              <label for="message">메시지</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">문의 보내기</button>
          </form>
        </div>
      </div>

      <!-- 카카오 지도 -->
      <div class="map-section">
        <h2>찾아오시는 길</h2>
        <div id="kakao-map" class="map-container"></div>
        <div class="map-info">
          <h3>교통편 안내</h3>
          <ul>
            <li><strong>지하철:</strong> 강남역 2번 출구에서 도보 5분</li>
            <li><strong>버스:</strong> 강남역 정류장 하차 후 도보 3분</li>
            <li><strong>주차:</strong> 건물 지하 1~3층 주차장 이용 (2시간 무료)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.')
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

const initKakaoMap = () => {
  // 카카오맵 API가 로드되었는지 확인
  if (typeof kakao !== 'undefined' && kakao.maps) {
    const container = document.getElementById('kakao-map');
    const options = {
      center: new kakao.maps.LatLng(37.4979, 127.0276), // 강남역 좌표
      level: 3
    };

    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(37.4979, 127.0276);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    marker.setMap(map);

    // 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
      content: '<div class="kakao-map-info">AllFleet 본사</div>'
    });

    // 마커에 클릭이벤트 등록
    kakao.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  } else {
    console.warn('카카오맵 API가 로드되지 않았습니다.');
  }
}

onMounted(() => {
  initKakaoMap();
})
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.1rem;
  color: #666;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info-section h2,
.contact-form h2,
.map-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #007bff;
  padding-bottom: 0.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.info-item .icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
}

.info-item h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.info-item p {
  color: #666;
  line-height: 1.6;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.submit-btn {
  background: #007bff;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background: #0056b3;
}

.map-section {
  margin-top: 2rem;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.map-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.map-info h3 {
  color: #333;
  margin-bottom: 1rem;
}

.map-info ul {
  list-style: none;
  padding: 0;
}

.map-info li {
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.map-info li:last-child {
  border-bottom: none;
}

.map-info strong {
  color: #007bff;
}

/* Kakao Map Info Window Style */
:global(.kakao-map-info) {
  padding: 5px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .contact-header h1 {
    font-size: 2rem;
  }

  .map-container {
    height: 300px;
  }

  .info-item {
    flex-direction: column;
    text-align: center;
  }

  .info-item .icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .contact-header h1 {
    font-size: 1.8rem;
  }

  .contact-form {
    padding: 1rem;
  }

  .map-container {
    height: 250px;
  }
}
</style>
