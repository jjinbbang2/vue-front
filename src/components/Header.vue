<template>
  <header class="header">
    <div class="logo">
      <h1>AllFleet</h1>
    </div>
    <nav>
      <ul class="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
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
  background-color: #007BFF;
  color: white;
}
.logo h1 {
  font-size: 1.8em;
  margin: 0;
}
.nav-menu {
  list-style: none;
  display: flex;
  gap: 1.5em;
  padding: 0;
  margin: 0;
}
.nav-menu li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.nav-menu li a:hover {
  text-decoration: underline;
}
</style>
