import template from './img.html';

const pImg = {
  name: 'p-img',
  props: {
    filename: {
      type: String
    },
    alt: {
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    source(){
      const { filename } = this;
      return filename ? `/images/${filename}` : '';
    }
  },
  template
};

export default pImg;
