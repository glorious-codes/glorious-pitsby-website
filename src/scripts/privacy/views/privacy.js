import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pLink from '@scripts/base/components/link/link';
import pLogo from '@scripts/base/components/logo/logo';
import pRow from '@scripts/base/components/row/row';
import pViewport from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './privacy.html';

const head = seoService.buildHead({
  title: 'Pitsby: Privacy',
  description: [
    'Subscribing on my personal newsletter, you will be notified about',
    'Pitsby\'s launch as well as updates regarding my personal',
    'projects or stories. I\'d love to find time to build and write more, but',
    'don\'t worry, it doesn\'t happen often.'
  ],
  keywords: 'pitsby, privacy, subscription'
});

const privacyView = {
  name: 'p-privacy-view',
  components: {
    pCol,
    pContainer,
    pLink,
    pLogo,
    pRow,
    pViewport
  },
  template
};

export default privacyView;
