import '@styles/adopters-list.styl';
import pAlert from '@scripts/base/components/alert/alert';
import pLazyLoad from '@scripts/base/components/lazy-load/lazy-load';
import pLink from '@scripts/base/components/link/link';
import template from './adopters-list.html';

const pAdoptersList = {
  name: 'p-adopters-list',
  components: {
    pAlert,
    pLazyLoad,
    pLink
  },
  template
};

export default pAdoptersList;
