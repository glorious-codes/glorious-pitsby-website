import Vue from '@vue';
import { shallowMount } from '@vue/test-utils';
import GDemo from '@glorious/demo';
import { GDemoMock, gDemoInstanceMock } from '@scripts/base/mocks/glorious-demo';
import REACT from '@scripts/base/constants/setup-code-react';
import VUE from '@scripts/base/constants/setup-code-vue';
import highlightCodeService from '@scripts/base/services/highlight-code/highlight-code';
import pSetup from './setup';

jest.mock('@glorious/demo');
GDemo.mockImplementation(GDemoMock);

const containerNames = ['configuration', 'documentation'];

describe('Setup', () => {
  function mount(){
    return shallowMount(pSetup);
  }

  function buildSelector(containerName){
    return `data-setup-container-${containerName}`;
  }

  function buildContainer(selector){
    const container = document.createElement('div');
    container.setAttribute(selector, '');
    return container;
  }

  function findInputsInWrapper(wrapper){
    return wrapper.vm.$el.querySelectorAll('[data-setup-engine-item] input');
  }

  beforeEach(() => {
    containerNames.forEach(name => {
      document.body.append(buildContainer(buildSelector(name)));
    });
    highlightCodeService.highlight = jest.fn(code => code);
  });

  afterEach(() => {
    containerNames.forEach(name => {
      document.querySelector(`[${buildSelector(name)}]`).remove();
    });
    gDemoInstanceMock.openApp.mockClear();
    gDemoInstanceMock.end.mockClear();
  });

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-setup');
  });

  it('should contain four engine options', () => {
    const wrapper = mount();
    const inputs = findInputsInWrapper(wrapper);
    expect(inputs[0].getAttribute('value')).toEqual('react');
    expect(inputs[1].getAttribute('value')).toEqual('vue');
    expect(inputs[2].getAttribute('value')).toEqual('angular');
    expect(inputs[3].getAttribute('value')).toEqual('vanilla');
  });

  it('should build setup editors for Vue on mount', () => {
    const wrapper = mount();
    expect(GDemoMock).toHaveBeenCalledWith('[data-setup-container-configuration]');
    expect(GDemoMock).toHaveBeenCalledWith('[data-setup-container-documentation]');
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('editor', {
      minHeight: '800px',
      inanimate: true,
      initialContent: REACT.CONFIG.INITIAL,
      windowTitle: 'pitsby.config.js'
    });
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('editor', {
      minHeight: '800px',
      inanimate: true,
      initialContent: REACT.DOC.INITIAL,
      windowTitle: 'button.doc.js'
    });
    expect(gDemoInstanceMock.end.mock.calls.length).toEqual(2);
  });

  it('should re-build setup editors when engine changes', done => {
    const wrapper = mount();
    const inputs = findInputsInWrapper(wrapper);
    inputs[1].click();
    Vue.nextTick(() => {
      expect(gDemoInstanceMock.openApp.mock.calls[2][1]).toEqual({
        minHeight: '800px',
        inanimate: true,
        initialContent: VUE.CONFIG.INITIAL,
        windowTitle: 'pitsby.config.js'
      });
      expect(gDemoInstanceMock.openApp.mock.calls[3][1]).toEqual({
        minHeight: '800px',
        inanimate: true,
        initialContent: VUE.DOC.INITIAL,
        windowTitle: 'button.doc.js'
      });
      done();
    });
  });
});
