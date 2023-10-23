import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#2a6a96',
    secondary: '#69707a',
    accent: '#f5d76e',
    error: '#d24d57'
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
