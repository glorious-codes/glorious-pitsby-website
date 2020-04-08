import pHomeHero from '@scripts/home/components/home-hero/home-hero';
import pViewport from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Pitsby',
  description: 'Have a nice time documenting components.',
  keywords: 'pitsby, ui, components, documentation, declarative'
});

const homeView = {
  name: 'p-home-view',
  components: {
    pHomeHero,
    pViewport
  },
  head,
  template
};

export default homeView;
