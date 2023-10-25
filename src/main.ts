import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import '@babel/polyfill';
import 'whatwg-fetch';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#2a6a96',
    secondary: '#69707a',
    accent: '#f5d76e',
    error: '#d24d57'
  }
});

new Vue({ // Vue 인스턴스 생성
  router,
  render: (h) => h(App), // 최상위 컴포넌트를 렌더링하는 함수
}).$mount('#app'); // #app 요소에 Vue 애플리케이션을 마운트