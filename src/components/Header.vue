<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <h1>AllFleet</h1>
      </router-link>
    </div>
    <nav>
      <ul class="nav-menu">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/features" class="nav-link">Features</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #007bff;
  color: white;
}

.logo h1 {
  font-size: 1.8em;
  margin: 0;
}

.logo-link {
  color: white;
  text-decoration: none;
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
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
