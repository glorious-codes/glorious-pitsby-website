import '@styles/viewport.styl';
import pFooter from '@scripts/base/components/footer/footer';
import pTopbar from '@scripts/base/components/topbar/topbar';
import template from './viewport.html';

const pViewport = {
  name: 'p-viewport',
  components: {
    pTopbar,
    pFooter
  },
  template
};

export default pViewport;
