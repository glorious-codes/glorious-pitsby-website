import { shallowMount } from '@vue/test-utils';
import pLogo from '@scripts/base/components/logo/logo';
import pTopbar from './topbar';

describe('Topbar', () => {
  function mount(){
    return shallowMount(pTopbar);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-topbar');
  });

  it('should contain a logo', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pLogo).length).toEqual(1);
  });
});
