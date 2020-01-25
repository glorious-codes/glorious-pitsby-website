import { shallowMount } from '@vue/test-utils';
import viewport from './viewport';

describe('Viewport', () => {
  function mount(){
    return shallowMount(viewport);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-viewport');
  });
});
