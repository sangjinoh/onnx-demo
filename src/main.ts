import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Router);
Vue.use(Vuetify, {
  theme: {
    primary: '#2a6a96',
    secondary: '#69707a',
    accent: '#f5d76e',
    error: '#d24d57'
  }
});

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home,
    },
  ],
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')