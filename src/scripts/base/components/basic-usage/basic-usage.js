import '@styles/basic-usage.styl';
import pCode from '@scripts/base/components/code/code';
import pLink from '@scripts/base/components/link/link';
import pPill from '@scripts/base/components/pill/pill';
import pSetup from '@scripts/base/components/setup/setup';
import template from './basic-usage.html';

const pBasicUsage = {
  name: 'p-basic-usage',
  components: {
    pCode,
    pLink,
    pPill,
    pSetup
  },
  template
};

export default pBasicUsage;
