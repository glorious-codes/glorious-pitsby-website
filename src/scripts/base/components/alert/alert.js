import '@styles/alert.styl';
import template from './alert.html';

const pAlert = {
  name: 'p-alert',
  props: {
    theme: String
  },
  computed: {
    classes(){
      return {
        'p-alert-success': this.theme == 'success',
        'p-alert-danger': this.theme == 'danger'
      };
    }
  },
  template
};

export default pAlert;
