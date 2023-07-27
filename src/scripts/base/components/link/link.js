import '@styles/link.styl';
import template from './link.html';

export default {
  name: 'p-link',
  props: {
    href: {
      type: String
    },
    rel: {
      type: String
    },
    target: {
      type: String,
      default: '_blank'
    },
    routeName: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  methods: {
    onLinkClick(){
      const { routeName, href, target } = this;
      return this.onClick && this.onClick({ routeName, href, target });
    }
  },
  template
};
