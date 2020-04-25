import documentationView from '@scripts/documentation/views/documentation';
import homeView from '@scripts/home/views/home';
import privacyView from '@scripts/privacy/views/privacy';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: documentationView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: privacyView
  }
];

export default routes;
