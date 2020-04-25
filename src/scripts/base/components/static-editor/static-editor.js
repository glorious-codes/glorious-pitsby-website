import '@styles/static-editor.styl';
import '@glorious/demo/dist/gdemo.min.css';
import GDemo from '@glorious/demo';
import highlightCodeService from '@scripts/base/services/highlight-code/highlight-code';
import template from './static-editor.html';

const pStaticEditor = {
  name: 'p-static-editor',
  props: {
    code: {
      type: String
    },
    name: {
      type: String
    },
    minHeight: {
      type: String
    },
    windowTitle: {
      type: String
    }
  },
  data(){
    return {
      style: ''
    };
  },
  created(){
    this.setStyle(`min-height: ${this.minHeight};`);
  },
  mounted(){
    openEditor({
      element: this.$el,
      initialContent: highlightCode(this.code),
      name: this.name,
      minHeight: this.minHeight,
      windowTitle: this.windowTitle
    });
  },
  methods: {
    setStyle(style){
      this.style = style;
    }
  },
  template
};

function highlightCode(code){
  return highlightCodeService.highlight(code);
}

function openEditor({ element, initialContent, minHeight, name, windowTitle }){
  const selector = `[data-static-editor-name="${name}"]`;
  const container = element.querySelector(selector);
  const gdemo = new GDemo(selector);
  container.innerHTML = '';
  gdemo.openApp('editor', {
    inanimate: true,
    minHeight,
    initialContent,
    windowTitle
  }).end();
}

export default pStaticEditor;
