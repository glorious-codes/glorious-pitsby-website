import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pHomePanel from '@scripts/home/components/home-panel/home-panel';
import pLogo from '@scripts/base/components/logo/logo';
import pRow from '@scripts/base/components/row/row';
import pViewport from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Pitsby',
  description: 'The declarative way of documenting components.',
  keywords: 'pitsby, ui, components, documentation, declarative'
});

const homeView = {
  name: 'p-home-view',
  components: {
    pCol,
    pContainer,
    pHomePanel,
    pLogo,
    pRow,
    pViewport
  },
  head,
  template
};

export default homeView;
