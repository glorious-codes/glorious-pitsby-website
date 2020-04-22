import Prism from 'prismjs';
import highlightCodeService from '@scripts/base/services/highlight-code/highlight-code';

describe('Highlight Code Service', () => {
  it('should highlight some javascript code', () => {
    Prism.highlight = jest.fn();
    const code = 'console.log("Hello!")';
    highlightCodeService.highlight(code);
    expect(Prism.highlight).toHaveBeenCalledWith(
      code,
      Prism.languages.javascript,
      'javascript'
    );
  });
});
