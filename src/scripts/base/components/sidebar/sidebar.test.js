import { shallowMount } from '@vue/test-utils';
import pSidebar from './sidebar';

describe('Sidebar', () => {
  function mount(){
    return shallowMount(pSidebar);
  }

  function findSidebarContentElement(wrapper){
    return wrapper.find('[data-sidebar-content]');
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-sidebar');
  });

  it('should toggle sidebar visibility', () => {
    const wrapper = mount();
    wrapper.vm.toggleSidebarVisibility();
    expect(wrapper.vm.sidebarVisibilityCssClass).toEqual('p-sidebar-content-visible');
    wrapper.vm.toggleSidebarVisibility();
    expect(wrapper.vm.sidebarVisibilityCssClass).toEqual('');
  });
});
