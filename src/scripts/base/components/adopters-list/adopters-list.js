import '@styles/adopters-list.styl';
import pLazyLoad from '@scripts/base/components/lazy-load/lazy-load';
import pLink from '@scripts/base/components/link/link';
import template from './adopters-list.html';

const pAdoptersList = {
  name: 'p-adopters-list',
  components: {
    pLazyLoad,
    pLink
  },
  template
};

export default pAdoptersList;
