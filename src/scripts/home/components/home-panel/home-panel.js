import '@styles/home-panel.styl';
import pCol from '@scripts/base/components/col/col';
import pLogo from '@scripts/base/components/logo/logo';
import pFeaturesList from '@scripts/base/components/features-list/features-list';
import pRow from '@scripts/base/components/row/row';
import template from './home-panel.html';

const pHomePanel = {
  name: 'p-home-panel',
  components: {
    pCol,
    pLogo,
    pFeaturesList,
    pRow
  },
  template
};

export default pHomePanel;
