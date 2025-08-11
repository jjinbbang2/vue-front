<template>
  <header class="header">
    <div class="nav-container">
      <router-link to="/" class="logo">AllFleet</router-link>

      <!-- 햄버거 메뉴 버튼 -->
      <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- 네비게이션 메뉴 -->
      <nav>
        <ul class="nav-menu" :class="{ active: isMenuOpen }">
          <li class="nav-item"><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li class="nav-item"><router-link to="/features" @click="closeMenu">Features</router-link></li>
          <li class="nav-item"><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import '../styles/header.css'

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
  background-color: #152553;
  color: white;
  position: relative;
  width: 100%;
}

.logo {
  font-size: 1.8em;
  margin: 0;
  color: white;
  text-decoration: none;
}

/* 데스크톱 네비게이션 */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 1.5em;
  padding: 0;
  margin: 0;
  margin-left: auto;
}

.nav-item {
  position: relative;
}

.nav-item a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 4px;
  transition: color 0.3s ease;
}

.nav-item a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item .router-link-exact-active,
.nav-item .router-link-active {
  color: #dc2626 !important;
  font-weight: bold;
  background-color: transparent !important;
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
  margin-left: auto;
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

  .nav-container {
    justify-content: space-between;
    width: 100%;
  }

  .hamburger {
    display: flex;
    margin-left: auto;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background-color: #152553;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 10;
    flex-direction: column;
    gap: 0;
    padding: 4rem 0 2rem 0;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-item {
    width: 100%;
  }

  .nav-item a {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: block;
  }

  .nav-item a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0.8em 1em;
  }

  .logo {
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
