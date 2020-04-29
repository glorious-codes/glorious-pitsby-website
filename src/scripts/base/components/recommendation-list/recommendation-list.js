import '@styles/recommendation-list.styl';
import RECOMMENDATIONS from '@scripts/base/constants/recommendations';
import pLink from '@scripts/base/components/link/link';
import template from './recommendation-list.html';

const pRecommendationList = {
  name: 'p-recommendation-list',
  components: {
    pLink
  },
  data(){
    return {
      recommendations: RECOMMENDATIONS
    };
  },
  template
};

export default pRecommendationList;
