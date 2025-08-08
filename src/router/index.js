import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Features from '../components/Features.vue'
import Contact from '../components/Contact.vue'
import Privacy from '../components/Privacy.vue'
import Terms from '../components/Terms.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
