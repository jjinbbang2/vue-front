<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="main-container">
    <Header />
    <section class="content">
      <h1>Welcome to AllFleet</h1>
      <p>Your trusted fleet management solution.</p>
      <button class="cta-button">Get Started</button>
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #f0f2f5;
}
.content {
  text-align: center;
  padding: 2em;
}
.cta-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1em 2em;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.cta-button:hover {
  background-color: #0056b3;
}
</style>
