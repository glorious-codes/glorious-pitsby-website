import '@styles/menu.styl';
import pGithubStarLink from '@scripts/base/components/github-star-link/github-star-link';
import pLink from '@scripts/base/components/link/link';
import routeService from '@scripts/base/services/route/route';
import template from './menu.html';

const pMenu = {
  name: 'p-menu',
  components: {
    pGithubStarLink,
    pLink
  },
  props: {
    hideGithubStarLink: {
      type: Boolean
    },
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
        { text: 'Adopters', href: '/#adopters', target: '_self', cssClass: '' },
        { text: 'Recommendations', href: '/#recommendations', target: '_self', cssClass: '' },
        { text: 'Contribute', href: 'https://github.com/glorious-codes/glorious-pitsby', target: '_blank', cssClass: 'p-menu-item-contribute' },
        { text: 'Donate', href: 'https://www.buymeacoffee.com/gloriouscodes', target: '_blank' }
      ]
    };
  },
  methods: {
    onMenuItemClick(item){
      this.onItemClick && this.onItemClick(item);
    }
  },
  computed: {
    shouldShowGithubStarButton(){
      const { prerender } = routeService.getQueryParams() || {};
      return !this.hideGithubStarLink && prerender != 'enabled';
    }
  },
  template
};

export default pMenu;
