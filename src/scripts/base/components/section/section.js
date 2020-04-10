import '@styles/section.styl';
import template from './section.html';

const pSection = {
  name: 'p-section',
  props: {
    theme: {
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    classes(){
      return {
        [`p-section-${this.theme}`]: isThemeValid(this.theme)
      };
    }
  },
  template
};


function isThemeValid(theme){
  return ['secondary'].includes(theme);
}

export default pSection;
