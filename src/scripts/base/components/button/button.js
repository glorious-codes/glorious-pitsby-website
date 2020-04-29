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
    tag: {
      type: String,
      default: 'button'
    },
    href: {
      type: String
    },
    to: {
      type: [String, Object]
    },
    faceless: {
      type: Boolean
    },
    target: {
      type: String,
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
        'p-button-block': this.block,
        'p-button-faceless': this.faceless
      };
    },
    buttonType(){
      if(this.tag == 'button')
        return buildButtonType(this.type);
    }
  },
  template
};

function isThemeValid(theme){
  return ['primary', 'secondary'].includes(theme);
}

function buildButtonType(type){
  return isTypeValid(type) ? type : 'button';
}

function isTypeValid(type){
  return ['submit', 'reset'].includes(type);
}

export default pButton;
