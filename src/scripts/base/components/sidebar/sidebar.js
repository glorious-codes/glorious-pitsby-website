import '@styles/sidebar.styl';
import pButton from '@scripts/base/components/button/button';
import pIcon from '@scripts/base/components/icon/icon';
import pMenu from '@scripts/base/components/menu/menu';
import template from './sidebar.html';

const pSidebar = {
  name: 'p-sidebar',
  components: {
    pButton,
    pIcon,
    pMenu
  },
  data(){
    return {
      sidebarVisibilityCssClass: ''
    };
  },
  methods: {
    toggleSidebarVisibility(){
      if(this.sidebarVisibilityCssClass)
        this.setSidebarVisibilityCssClass('');
      else
        this.setSidebarVisibilityCssClass('p-sidebar-content-visible');
    },
    setSidebarVisibilityCssClass(cssClass){
      this.sidebarVisibilityCssClass = cssClass;
    },
    onMenuItemClick(item){
      if(item.target == '_self') this.setSidebarVisibilityCssClass('');
    }
  },
  template
};

export default pSidebar;
