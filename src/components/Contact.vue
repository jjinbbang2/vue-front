<template>
  <div class="contact">
    <div class="container">
      <h1>Contact Us</h1>
      <p class="subtitle">Get in touch with our team for any questions or support</p>

      <div class="contact-content">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>123 Fleet Street<br>Seoul, South Korea 12345</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+82-2-1234-5678</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>contact@allfleet.kr</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send us a message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" v-model="form.subject" required>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>

            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  alert('Message sent! We will get back to you soon.')
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
}

.contact-info h2,
.contact-form h2 {
  color: #007BFF;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.info-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
}

.info-item h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.info-item p {
  color: #666;
  line-height: 1.6;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
  max-width: 100%;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007BFF;
}

.submit-btn {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.submit-btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact {
    padding: 3rem 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .info-item {
    margin-bottom: 1.5rem;
  }

  .info-icon {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 2rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .contact-content {
    gap: 1.5rem;
  }

  .contact-form {
    padding: 1.2rem;
  }

  .contact-info h2,
  .contact-form h2 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 0.6rem;
    font-size: 0.9rem;
  }

  .submit-btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .info-item h3 {
    font-size: 1.1rem;
  }

  .info-item p {
    font-size: 0.9rem;
  }
}
</style>
