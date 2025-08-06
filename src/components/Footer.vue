<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 AllFleet. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 1em;
  background-color: #f8f9fa;
  color: #6c757d;
  border-top: 1px solid #ddd;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer nav ul {
  list-style: none;
  display: flex;
  gap: 1em;
  padding: 0;
  margin: 0;
}
.footer nav ul li a {
  color: #6c757d;
  text-decoration: none;
}
.footer nav ul li a:hover {
  text-decoration: underline;
}
</style>
