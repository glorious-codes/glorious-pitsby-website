import { shallowMount } from '@vue/test-utils';
import pTag from './tag';

describe('Tag', () => {
  function mount(content = ''){
    return shallowMount(pTag, {
      slots: { default: content }
    });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-tag');
  });

  it('should render some content', () => {
    const wrapper = mount('<strong>hello!</strong>');
    expect(wrapper.find('strong').text()).toEqual('hello!');
  });
});
