<template>
  <div class="features">
    <div class="container">
      <h1>Features</h1>
      <p class="subtitle">Discover what makes AllFleet the best choice for fleet management</p>

      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">🚛</div>
          <h3>Real-time Vehicle Tracking</h3>
          <p>Monitor your entire fleet in real-time with GPS tracking technology. Know exactly where your vehicles are at any moment.</p>
        </div>

        <div class="feature-item">
          <div class="feature-icon">⛽</div>
          <h3>Fuel Management</h3>
          <p>Track fuel consumption, optimize routes, and reduce operational costs with our advanced fuel management system.</p>
        </div>

        <div class="feature-item">
          <div class="feature-icon">📊</div>
          <h3>Advanced Analytics</h3>
          <p>Get detailed insights with comprehensive reports on driver behavior, vehicle performance, and operational efficiency.</p>
        </div>

        <div class="feature-item">
          <div class="feature-icon">🔧</div>
          <h3>Maintenance Scheduling</h3>
          <p>Automated maintenance reminders and scheduling to keep your fleet running smoothly and reduce downtime.</p>
        </div>

        <div class="feature-item">
          <div class="feature-icon">📱</div>
          <h3>Mobile App</h3>
          <p>Access your fleet data on the go with our mobile application available for iOS and Android devices.</p>
        </div>

        <div class="feature-item">
          <div class="feature-icon">🛡️</div>
          <h3>Security & Safety</h3>
          <p>Advanced security features including geofencing, driver safety monitoring, and emergency alerts.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

h1 {
  text-align: center;
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  color: #007BFF;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .features {
    padding: 3rem 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .feature-item {
    padding: 1.5rem;
  }

  .feature-icon {
    font-size: 2.5rem;
  }

  .feature-item h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .features {
    padding: 2rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-item {
    padding: 1.2rem;
  }

  .feature-icon {
    font-size: 2rem;
  }

  .feature-item h3 {
    font-size: 1.2rem;
  }

  .feature-item p {
    font-size: 0.9rem;
  }
}
</style>
