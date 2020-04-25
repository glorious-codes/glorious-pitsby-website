import '@styles/menu.styl';
import pLink from '@scripts/base/components/link/link';
import template from './menu.html';

const pMenu = {
  name: 'p-menu',
  components: {
    pLink
  },
  data(){
    return {
      items: [
        { text: 'Features', href: '/#features', target: '_self' },
        { text: 'Basics', href: '/#basics', target: '_self' },
        { text: 'Documentation', to: 'documentation' },
        { text: 'Contribute', href: 'https://github.com/glorious-codes/glorious-pitsby', target: '_blank' }
      ]
    };
  },
  template
};

export default pMenu;
