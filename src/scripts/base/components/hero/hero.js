import '@styles/hero.styl';
import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pRow from '@scripts/base/components/row/row';
import template from './hero.html';

const pHero = {
  name: 'p-hero',
  components: {
    pCol,
    pContainer,
    pRow
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  template
};

export default pHero;
