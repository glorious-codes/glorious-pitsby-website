import '@styles/col.styl';
import template from './col.html';

export default {
  name: 'p-col',
  props: ['size', 'offset'],
  computed: {
    classes(){
      return {
        [`p-col-size-${this.size}`]: this.size,
        [`p-col-offset-${this.offset}`]: this.offset
      };
    }
  },
  template
};
