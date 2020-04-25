import '@styles/alert.styl';
import template from './alert.html';

const pAlert = {
  name: 'p-alert',
  props: {
    theme: {
      type: String
    },
    triggerText: {
      type: String,
      default: 'Retry'
    },
    onTriggerClick: {
      type: Function
    }
  },
  computed: {
    classes(){
      return {
        [`p-alert-${this.theme}`]: isThemeValid(this.theme),
        'p-alert-has-trigger': this.onTriggerClick
      };
    }
  },
  template
};

function isThemeValid(theme){
  return ['success', 'danger'].includes(theme);
}

export default pAlert;
