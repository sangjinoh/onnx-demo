import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
// import Yolo from '../components/models/Yolo.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/yolo',
    //   component: Yolo,
    // }
  ],
});