import pBasicUsage from '@scripts/base/components/basic-usage/basic-usage';
import pButton from '@scripts/base/components/button/button';
import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pFeaturesList from '@scripts/base/components/features-list/features-list';
import pHomeHero from '@scripts/home/components/home-hero/home-hero';
import pRecommendationList from '@scripts/base/components/recommendation-list/recommendation-list';
import pRow from '@scripts/base/components/row/row';
import pSection from '@scripts/base/components/section/section';
import seoService from '@scripts/base/services/seo/seo';
import pViewport from '@scripts/base/components/viewport/viewport';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Pitsby',
  description: 'Have a nice time documenting components.',
  keywords: 'pitsby, ui, components, documentation, declarative'
});

const homeView = {
  name: 'p-home-view',
  components: {
    pBasicUsage,
    pButton,
    pCol,
    pContainer,
    pFeaturesList,
    pHomeHero,
    pRecommendationList,
    pRow,
    pSection,
    pViewport
  },
  head,
  template
};

export default homeView;
