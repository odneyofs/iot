import Vue from 'vue';
import Home from '../views/Home.vue';
//import Login from '../views/Login.vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }/*,
    {
      path: '/login',
      name: 'login',
      component: Login
    } */
  ]
})
