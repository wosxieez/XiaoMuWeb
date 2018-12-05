import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './views/Home'
import Register from './views/Register'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Home}, 
    {path: '/register', component: Register}
  ]
})

export default router