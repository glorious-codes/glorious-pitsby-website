import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pRow from '@scripts/base/components/row/row';
import pViewport from '@scripts/base/components/viewport/viewport';
import template from './privacy.html';

const privacyView = {
  name: 'p-privacy-view',
  components: {
    pCol,
    pContainer,
    pRow,
    pViewport
  },
  template
};

export default privacyView;
