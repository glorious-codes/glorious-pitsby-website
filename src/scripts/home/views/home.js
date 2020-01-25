import viewport from '@scripts/base/components/viewport/viewport';
import homeGreeting from '@scripts/home/components/home-greeting/home-greeting';
import template from './home.html';

const homeView = {
  name: 'home-view',
  components: {
    homeGreeting,
    viewport
  },
  template
};

export default homeView;
