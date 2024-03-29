import '@styles/topbar.styl';
import pCol from '@scripts/base/components/col/col';
import pContainer from '@scripts/base/components/container/container';
import pLink from '@scripts/base/components/link/link';
import pLogo from '@scripts/base/components/logo/logo';
import pMenu from '@scripts/base/components/menu/menu';
import pRow from '@scripts/base/components/row/row';
import template from './topbar.html';

const pTopbar = {
  name: 'p-topbar',
  components: {
    pCol,
    pContainer,
    pLink,
    pLogo,
    pMenu,
    pRow
  },
  props: {
    hideMenu: {
      type: Boolean
    }
  },
  template
};

export default pTopbar;
