import { shallowMount } from '@vue/test-utils';
import pSidebar from '@scripts/base/components/sidebar/sidebar';
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

  it('should contain a sidebar', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pSidebar).length).toEqual(1);
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pTopbar).length).toEqual(1);
  });
});
