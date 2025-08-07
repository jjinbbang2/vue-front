<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <h1>AllFleet</h1>
      </router-link>
    </div>

    <!-- 햄버거 메뉴 버튼 -->
    <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- 네비게이션 메뉴 -->
    <nav class="nav" :class="{ active: isMenuOpen }">
      <ul class="nav-menu">
        <li><router-link to="/" class="nav-link" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/features" class="nav-link" @click="closeMenu">Features</router-link></li>
        <li><router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link></li>
      </ul>
    </nav>

    <!-- 모바일 오버레이 -->
    <div class="overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #007bff;
  color: white;
  position: relative;
}

.logo h1 {
  font-size: 1.8em;
  margin: 0;
}

.logo-link {
  color: white;
  text-decoration: none;
}

/* 데스크톱 네비게이션 */
.nav {
  display: block;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 1.5em;
  padding: 0;
  margin: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: block;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 햄버거 메뉴 버튼 */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5em;
  z-index: 20;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* 햄버거 메뉴 애니메이션 */
.hamburger.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* 모바일 오버레이 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 5;
}

.overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .header {
    padding: 1em 2em;
  }

  .hamburger {
    display: flex;
  }

  /* 모바일 슬라이드 메뉴 */
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background-color: #007bff;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 10;
    padding-top: 80px;
  }

  .nav.active {
    transform: translateX(0);
  }

  .nav-menu {
    flex-direction: column;
    gap: 0;
    padding: 2rem 0;
  }

  .nav-link {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0.8em 1em;
  }

  .logo h1 {
    font-size: 1.3em;
  }

  .nav {
    width: 250px;
  }

  .nav-link {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
