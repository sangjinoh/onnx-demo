import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
// import Resnet50 from '../components/models/Resnet50.vue';
// import Yolo from '../components/models/Yolo.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash', //해시 모드
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/resnet50',
    //   component: Resnet50,
    // },
    // {
    //   path: '/yolo',
    //   component: Yolo,
    // }
  ],
});