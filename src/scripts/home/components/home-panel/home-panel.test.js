import { shallowMount } from '@vue/test-utils';
import pHomePanel from './home-panel';

describe('Home Panel', () => {
  function mount(content = ''){
    return shallowMount(pHomePanel, {
      slots: { default: content }
    });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-home-panel');
  });
});
