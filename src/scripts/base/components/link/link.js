import template from './link.html';

export default {
  name: 'p-link',
  props: {
    href: {
      type: String
    },
    target: {
      type: String,
      default: '_blank'
    },
    routeName: {
      type: String
    }
  },
  template
};
