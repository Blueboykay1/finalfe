import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import Signup from '../views/Signup.vue'

import Allflights from '../views/Allflights.vue'
import SingleF from '../views/SingleF.vue'

import AdminLogin from '../views/AdminLogin.vue'

import Contact from '../views/Contact.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLogin
  },
  {
    path: '/admindash',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/flights',
    name: 'Allflights',
    component: Allflights
  },
  {
    path: '/singlef/:id',
    name: 'SingleF',
    component: SingleF,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
