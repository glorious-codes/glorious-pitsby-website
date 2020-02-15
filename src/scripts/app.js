import '@styles/_native.styl';
import Vue from '@vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import routes from '@scripts/routes';
import template from '@scripts/app.html';
import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from '@scripts/base/services/route/route';

Vue.use(VueHead, {
  separator: '',
  complement: ''
});
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history' });
const app = { name: 'app', template };

routeService.setRouter(router);
analyticsService.init();

/* eslint-disable no-unused-vars */
const mountedApp = new Vue({
  el: '[data-app]',
  render: h => h(app),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  router
});
