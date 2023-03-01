import template from './postpone.html';

const pPostpone = {
  name: 'p-postpone',
  props: ['delay'],
  data(){
    return {
      shouldShow: false
    };
  },
  mounted(){
    setTimeout(() => {
      this.shouldShow = true;
    }, parseInt(this.delay));
  },
  template
};

export default pPostpone;
