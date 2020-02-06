import '@styles/icon.styl';
import template from './icon.html';

export default {
  name: 'p-icon',
  props: {
    name: String
  },
  data(){
    return {
      style: ''
    };
  },
  created(){
    this.setStyle(this.buildStyle(this.name));
  },
  methods: {
    buildStyle(name){
      const value = `url(/images/icon-${name}.svg)`;
      return `-webkit-mask-image: ${value}; mask-image: ${value}`;
    },
    setStyle(style){
      this.style = style;
    }
  },
  computed: {
    classes(){
      return {
        [`p-icon-${this.name}`]: this.name
      };
    }
  },
  template
};
