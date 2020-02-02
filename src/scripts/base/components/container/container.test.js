import { shallowMount } from '@vue/test-utils';
import pContainer from './container';

describe('Container', () => {
  function mount(content = ''){
    return shallowMount(pContainer, {
      slots: { default: content }
    });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-container');
  });

  it('should render some content', () => {
    const wrapper = mount('<p>hello!</p>');
    expect(wrapper.find('p').text()).toEqual('hello!');
  });
});
