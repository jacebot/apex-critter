import Vue from 'vue';
import VuePageTransition from 'vue-page-transition';
import App from './App.vue';
import router from './router';


import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'vue-ionicons/ionicons.css';

Vue.use(Buefy);
Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
