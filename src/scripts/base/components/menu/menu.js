import '@styles/menu.styl';
import pLink from '@scripts/base/components/link/link';
import template from './menu.html';

const pMenu = {
  name: 'p-menu',
  components: {
    pLink
  },
  props: {
    onItemClick: {
      type: Function
    }
  },
  data(){
    return {
      items: [
        { text: 'Features', href: '/#features', target: '_self' },
        { text: 'Basics', href: '/#basics', target: '_self' },
        { text: 'Documentation', to: 'documentation' },
        { text: 'Recommendations', href: '/#recommendations', target: '_self' },
        { text: 'Contribute', href: 'https://github.com/glorious-codes/glorious-pitsby', target: '_blank' }
      ]
    };
  },
  methods: {
    onMenuItemClick(item){
      return this.onItemClick && this.onItemClick(item);
    }
  },
  template
};

export default pMenu;
