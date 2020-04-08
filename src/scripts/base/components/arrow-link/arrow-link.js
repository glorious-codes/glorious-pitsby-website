import '@styles/arrow-link.styl';
import pIcon from '@scripts/base/components/icon/icon';
import template from './arrow-link.html';

export default {
  name: 'p-arrow-link',
  components: {
    pIcon
  },
  props: {
    href: {
      type: String
    },
    target: {
      type: String,
      default: '_self'
    },
    text: {
      type: String
    }
  },
  template
};
