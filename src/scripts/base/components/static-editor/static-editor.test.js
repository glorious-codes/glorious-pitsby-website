import Vue from '@vue';
import { shallowMount } from '@vue/test-utils';
import GDemo from '@glorious/demo';
import { GDemoMock, gDemoInstanceMock } from '@scripts/base/mocks/glorious-demo';
import highlightCodeService from '@scripts/base/services/highlight-code/highlight-code';
import pStaticEditor from './static-editor';

jest.mock('@glorious/demo');
GDemo.mockImplementation(GDemoMock);

describe('Static Editor', () => {
  function mount(propsData = {}){
    return shallowMount(pStaticEditor, { propsData });
  }

  function findStaticEditorContainer(wrapper, name){
    return wrapper.find(`[data-static-editor-name="${name}"]`);
  }

  beforeEach(() => {
    highlightCodeService.highlight = jest.fn(code => code);
  });

  it('should have appropriate class', () => {
    const wrapper = mount({ name: 'example' });
    expect(wrapper.classes()).toContain('p-static-editor');
  });

  it('should set minimum height style for container on create', () => {
    const name = 'example';
    const wrapper = mount({ name, minHeight: '300px' });
    const container = findStaticEditorContainer(wrapper, name);
    expect(container.attributes('style')).toEqual('min-height: 300px;');
  });

  it('should highlight the given code', () => {
    const code = '<p>Hello!</p>';
    const wrapper = mount({ name: 'example', code });
    expect(highlightCodeService.highlight).toHaveBeenCalledWith(code);
  });

  it('should render an editor', () => {
    const name = 'example';
    const code = '<p>Hello!</p>';
    const minHeight = '800px';
    const windowTitle = 'pitsby.config.js';
    const wrapper = mount({ name, code, minHeight, windowTitle });
    expect(GDemoMock).toHaveBeenCalledWith(`[data-static-editor-name="${name}"]`);
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('editor', {
      inanimate: true,
      initialContent: code,
      windowTitle,
      minHeight
    });
    expect(gDemoInstanceMock.end).toHaveBeenCalled();
  });
});
