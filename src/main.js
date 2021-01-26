import store from '@/store';
import Vue from 'vue';
import App from './App.vue';

import '@/assets/todo.css';

Vue.config.productionTip = false;

new Vue({
  render: (createApp) => createApp(App),
  store,
}).$mount('#app');
