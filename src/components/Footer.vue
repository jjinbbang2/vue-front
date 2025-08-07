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

/* 반응형 디자인 */
@media (max-width: 768px) {
  .footer-content {
    gap: 1rem;
  }

  .footer nav ul {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .footer p {
    font-size: 0.9rem;
    margin: 0;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 0.8rem;
  }

  .footer nav ul li a {
    font-size: 0.8rem;
  }

  .footer p {
    font-size: 0.8rem;
  }
}
</style>
