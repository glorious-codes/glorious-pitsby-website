import '@styles/viewport.styl';
import pFooter from '@scripts/base/components/footer/footer';
import pSidebar from '@scripts/base/components/sidebar/sidebar';
import pTopbar from '@scripts/base/components/topbar/topbar';
import template from './viewport.html';

const pViewport = {
  name: 'p-viewport',
  components: {
    pFooter,
    pSidebar,
    pTopbar
  },
  template
};

export default pViewport;
