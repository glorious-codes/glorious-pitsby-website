import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';

const _public = {};

_public.highlight = code => {
  return Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
  );
};

export default _public;
