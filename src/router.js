import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Hello from './views/Hello.vue';
import Media from './views/Media.vue';
import Vault from './views/Vault.vue';
import Error404 from './views/Error404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/vault',
      name: 'vault',
      component: Vault
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
