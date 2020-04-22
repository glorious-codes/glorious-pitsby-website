import '@styles/setup.styl';
import '@glorious/demo/dist/gdemo.min.css';
import GDemo from '@glorious/demo';
import pCol from '@scripts/base/components/col/col';
import pRow from '@scripts/base/components/row/row';
import highlightCodeService from '@scripts/base/services/highlight-code/highlight-code';
import setupCodeService from '@scripts/base/services/setup-code/setup-code';
import template from './setup.html';

const pSetup = {
  name: 'p-setup',
  components: {
    pCol,
    pRow
  },
  data(){
    return {
      engines: [
        {value: 'vue', text: 'Vue'},
        {value: 'react', text: 'React'},
        {value: 'angular', text: 'AngularJS'},
        {value: 'vanilla', text: 'Vanilla'}
      ],
      selectedEngine: 'vue'
    };
  },
  mounted(){
    buildEditors(this.selectedEngine);
  },
  updated(){
    buildEditors(this.selectedEngine);
  },
  template
};

function buildEditors(engine){
  const CODE = getCode(engine);
  openEditor({
    selectorSuffix: 'configuration',
    windowTitle: 'pitsby.config.js',
    initialContent: highlightCode(CODE.CONFIG.INITIAL)
  });
  openEditor({
    selectorSuffix: 'documentation',
    windowTitle: 'button.doc.js',
    initialContent: highlightCode(CODE.DOC.INITIAL)
  });
}

function getCode(engine){
  return setupCodeService.get(engine);
}

function highlightCode(code){
  return highlightCodeService.highlight(code);
}

function openEditor({ selectorSuffix, initialContent, windowTitle }){
  const selector = `[data-setup-container-${selectorSuffix}]`;
  const container = document.querySelector(selector);
  const gdemo = new GDemo(selector);
  container.innerHTML = '';
  gdemo.openApp('editor', {
    minHeight: '800px',
    inanimate: true,
    initialContent,
    windowTitle
  }).end();
}

export default pSetup;
