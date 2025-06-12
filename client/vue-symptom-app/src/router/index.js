import { createRouter, createWebHistory } from 'vue-router'
import PatientsView from '../views/PatientsView.vue'
import SymptomsView from '../views/SymptomsView.vue'

const routes = [
  {
    path: '/',
    name: 'Patients',
    component: PatientsView
  },
  {
    path: '/',
    name: 'Symptoms',
    component: SymptomsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router