import '@styles/home-hero.styl';
import VIEWPORT from '@scripts/base/constants/viewport';
import windowService from '@scripts/base/services/window/window';
import pArrowLink from '@scripts/base/components/arrow-link/arrow-link';
import pGithubStarLink from '@scripts/base/components/github-star-link/github-star-link';
import pPostpone from '@scripts/base/components/postpone/postpone';

import pHero from '@scripts/base/components/hero/hero';
import pImg from '@scripts/base/components/img/img';
import template from './home-hero.html';

const pHomeHero = {
  name: 'p-home-hero',
  components: {
    pArrowLink,
    pGithubStarLink,
    pPostpone,
    pHero,
    pImg
  },
  data(){
    return {
      shouldShowGithubStarLink: this.getGithubStarLinkVisibility()
    };
  },
  created(){
    window.addEventListener('resize', this.onWindowResize);
  },
  destroyed(){
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize(){
      this.setGithubStarLinkVisibility(this.getGithubStarLinkVisibility());
    },
    setGithubStarLinkVisibility(shouldShowGithubStarLink){
      this.shouldShowGithubStarLink = shouldShowGithubStarLink;
    },
    getGithubStarLinkVisibility(){
      return windowService.getViewportWidth() < VIEWPORT.DESKTOP_WIDTH;
    }
  },
  template
};

export default pHomeHero;
