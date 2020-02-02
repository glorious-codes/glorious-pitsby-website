import '@styles/row.styl';
import template from './row.html';

export default {
  name: 'p-row',
  props: {
    verticalCentered: Boolean,
    verticalOffset: String
  },
  computed: {
    classes(){
      return {
        'p-row-vertical-centered': this.verticalCentered,
        [`p-row-vertical-offset-${this.verticalOffset}`]: !!this.verticalOffset
      };
    }
  },
  template
};
