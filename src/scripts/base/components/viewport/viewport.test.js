import { shallowMount } from '@vue/test-utils';
import pTopbar from '@scripts/base/components/topbar/topbar';
import viewport from './viewport';

describe('Viewport', () => {
  function mount(){
    return shallowMount(viewport);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-viewport');
  });

  it('should contain topbar', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pTopbar).length).toEqual(1);
  });
});
