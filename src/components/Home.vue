<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Welcome to AllFleet</h1>
        <p class="hero-subtitle">Your trusted fleet management solution</p>
        <button class="cta-button">Get Started</button>
      </div>
    </section>

    <section class="features-preview">
      <div class="container">
        <h2>Why Choose AllFleet?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Real-time Tracking</h3>
            <p>Monitor your fleet in real-time with GPS tracking</p>
          </div>
          <div class="feature-card">
            <h3>Cost Management</h3>
            <p>Optimize fuel costs and maintenance schedules</p>
          </div>
          <div class="feature-card">
            <h3>Analytics</h3>
            <p>Get detailed insights with comprehensive reports</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #007BFF 0%, #0056b3 100%);
  color: white;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: white;
  color: #007BFF;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  background-color: #f8f9fa;
}

.features-preview {
  padding: 2rem 0;
  text-align: center;
}

.features-preview h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #007BFF;
  margin-bottom: 1rem;
}
</style>
