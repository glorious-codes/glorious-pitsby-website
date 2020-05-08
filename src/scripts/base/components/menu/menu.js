import '@styles/menu.styl';
import pGithubButtonWidget from '@scripts/base/components/github-button-widget/github-button-widget';
import pLink from '@scripts/base/components/link/link';
import analyticsService from '@scripts/base/services/analytics/analytics';
import template from './menu.html';

const pMenu = {
  name: 'p-menu',
  components: {
    pGithubButtonWidget,
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
        { text: 'Features', href: '/#features', target: '_self', cssClass: '' },
        { text: 'Basics', href: '/#basics', target: '_self', cssClass: '' },
        { text: 'Documentation', to: 'documentation', cssClass: '' },
        { text: 'Recommendations', href: '/#recommendations', target: '_self', cssClass: '' },
        { text: 'Contribute', href: 'https://github.com/glorious-codes/glorious-pitsby', target: '_blank', cssClass: 'p-menu-item-contribute' }
      ]
    };
  },
  methods: {
    onMenuItemClick(item){
      analyticsService.trackEvent('clicked menu item', item);
      return this.onItemClick && this.onItemClick(item);
    }
  },
  template
};

export default pMenu;
