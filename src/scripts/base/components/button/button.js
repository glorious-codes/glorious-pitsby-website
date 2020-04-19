import '@styles/button.styl';
import template from './button.html';

const pButton = {
  name: 'p-button',
  props: {
    type: {
      type: String
    },
    theme: {
      type: String
    },
    block: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    onClick: {
      type: Function
    }
  },
  methods: {
    onButtonClick(){
      return this.onClick && this.onClick();
    }
  },
  computed: {
    classes(){
      return {
        [`p-button-${this.theme}`]: isThemeValid(this.theme),
        'p-button-block': this.block
      };
    },
    buttonType(){
      return isTypeValid(this.type) ? this.type : 'button';
    }
  },
  template
};

function isThemeValid(theme){
  return ['primary', 'secondary'].includes(theme);
}

function isTypeValid(type){
  return ['submit', 'reset'].includes(type);
}

export default pButton;
