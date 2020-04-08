import '@styles/home-hero.styl';
import pArrowLink from '@scripts/base/components/arrow-link/arrow-link';
import pHero from '@scripts/base/components/hero/hero';
import pImg from '@scripts/base/components/img/img';
import template from './home-hero.html';

const pHomeHero = {
  name: 'p-home-hero',
  components: {
    pArrowLink,
    pHero,
    pImg
  },
  template
};

export default pHomeHero;
