import '@styles/viewport.styl';
import VIEWPORT from '@scripts/base/constants/viewport';
import windowService from '@scripts/base/services/window/window';
import pFooter from '@scripts/base/components/footer/footer';
import pSidebar from '@scripts/base/components/sidebar/sidebar';
import pTopbar from '@scripts/base/components/topbar/topbar';
import template from './viewport.html';

const pViewport = {
  name: 'p-viewport',
  components: {
    pFooter,
    pSidebar,
    pTopbar
  },
  data(){
    return {
      shouldShowSidebar: this.getSidebarVisibility()
    };
  },
  created(){
    window.addEventListener('resize', this.onWindowResize);
  },
  destroyed(){
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize(){
      this.setSidebarVisibility(this.getSidebarVisibility());
    },
    setSidebarVisibility(shouldShowSidebar){
      this.shouldShowSidebar = shouldShowSidebar;
    },
    getSidebarVisibility(){
      return windowService.getViewportWidth() < VIEWPORT.DESKTOP_WIDTH;
    }
  },
  template
};

export default pViewport;
