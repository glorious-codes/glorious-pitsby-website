import '@styles/features-list.styl';
import pIcon from '@scripts/base/components/icon/icon';
import pLazyLoad from '@scripts/base/components/lazy-load/lazy-load';
import template from './features-list.html';

const pFeaturesList = {
  name: 'p-features-list',
  components: {
    pIcon,
    pLazyLoad
  },
  data(){
    return {
      features: [
        {
          iconName: 'lightning',
          title: 'Lightning Setup',
          description: 'No rules. No loaders. No regex. Ship your docs with a couple of super simple declarations.'
        },
        {
          iconName: 'cog',
          title: 'Wide Support',
          description: 'Support for legacy and modern frameworks. Perfect for companies migrating from AngularJS to Vue or React.'
        },
        {
          iconName: 'ball',
          title: 'Playground',
          description: 'Prototype and share component compositions with your workmates.'
        },
        {
          iconName: 'chart',
          title: 'Analytics Integration',
          description: 'Find out which components people are most interested in.'
        },
        {
          iconName: 'tools',
          title: 'Fully Customizable',
          description: 'Use your own logo, favicon, window title and everything else you want.'
        },
        {
          iconName: 'heart',
          title: 'Open Source',
          description: 'Forever free and lovely crafted.'
        },
      ]
    }
  },
  template
};

export default pFeaturesList;
