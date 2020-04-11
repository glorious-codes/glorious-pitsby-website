import { shallowMount } from '@vue/test-utils';
import pCode from './code';

describe('Code', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pCode, {
      propsData,
      slots: {
        default: content
      }
    });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-code');
  });

  it('should render some content', () => {
    const wrapper = mount({}, '<p>hello!</p>');
    expect(wrapper.find('p').text()).toEqual('hello!');
  });
});
