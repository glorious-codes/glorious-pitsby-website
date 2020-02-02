import '@styles/col.styl';
import template from './col.html';

export default {
  name: 'p-col',
  props: ['size'],
  data(){
    return {
      sizeCssClass: ''
    };
  },
  created(){
    this.setSizeCssClass(this.size);
  },
  methods: {
    setSizeCssClass(size){
      this.sizeCssClass = size ? `p-col-size-${size}` : '';
    }
  },
  template
};
