import '@styles/home-hero.styl';
import pArrowLink from '@scripts/base/components/arrow-link/arrow-link';
import pGithubButtonWidget from '@scripts/base/components/github-button-widget/github-button-widget';
import pHero from '@scripts/base/components/hero/hero';
import pImg from '@scripts/base/components/img/img';
import template from './home-hero.html';

const pHomeHero = {
  name: 'p-home-hero',
  components: {
    pArrowLink,
    pGithubButtonWidget,
    pHero,
    pImg
  },
  template
};

export default pHomeHero;
