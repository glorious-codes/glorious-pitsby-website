import DOCUMENTATION_CODE from '@scripts/documentation/constants/code';
import pAlert from '@scripts/base/components/alert/alert';
import pButton from '@scripts/base/components/button/button';
import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pHero from '@scripts/base/components/hero/hero';
import pLink from '@scripts/base/components/link/link';
import pRow from '@scripts/base/components/row/row';
import pSection from '@scripts/base/components/section/section';
import pStaticEditor from '@scripts/base/components/static-editor/static-editor';
import seoService from '@scripts/base/services/seo/seo';
import pViewport from '@scripts/base/components/viewport/viewport';
import template from './documentation.html';

const head = seoService.buildHead({
  title: 'Pitsby Documentation',
  description: 'No rules. No loaders. No regex. Ship your docs with a couple of super simple declarations.',
  keywords: 'pitsby, ui, components, configuration, documentation, declarative'
});

const documentationView = {
  name: 'p-documentation-view',
  components: {
    pAlert,
    pButton,
    pCol,
    pContainer,
    pHero,
    pLink,
    pRow,
    pSection,
    pStaticEditor,
    pViewport
  },
  data(){
    return {
      code: DOCUMENTATION_CODE
    };
  },
  head,
  template
};

export default documentationView;
