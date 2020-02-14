import homeView from '@scripts/home/views/home';
import privacyView from '@scripts/privacy/views/privacy';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: privacyView
  }
];

export default routes;
