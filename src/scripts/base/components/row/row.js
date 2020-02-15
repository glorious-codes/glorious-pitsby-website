import '@styles/row.styl';
import template from './row.html';

export default {
  name: 'p-row',
  props: {
    verticalCentered: Boolean,
    horizontalCentered: Boolean,
    verticalOffset: String
  },
  computed: {
    classes(){
      return {
        'p-row-vertical-centered': this.verticalCentered,
        'p-row-horizontal-centered': this.horizontalCentered,
        [`p-row-vertical-offset-${this.verticalOffset}`]: !!this.verticalOffset
      };
    }
  },
  template
};
