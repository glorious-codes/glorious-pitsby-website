import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pHomePanel from '@scripts/home/components/home-panel/home-panel';
import pLogo from '@scripts/base/components/logo/logo';
import pRow from '@scripts/base/components/row/row';
import pViewport from '@scripts/base/components/viewport/viewport';
import template from './home.html';

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
  template
};

export default homeView;
