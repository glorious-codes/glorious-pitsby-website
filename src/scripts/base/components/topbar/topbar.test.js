import { shallowMount } from '@vue/test-utils';
import pLogo from '@scripts/base/components/logo/logo';
import pMenu from '@scripts/base/components/menu/menu';
import pTopbar from './topbar';

describe('Topbar', () => {
  function mount(propsData){
    return shallowMount(pTopbar, { propsData });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-topbar');
  });

  it('should contain a logo', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pLogo).length).toEqual(1);
  });

  it('should contain a menu by default', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pMenu).length).toEqual(1);
  })

  it('should optionaly hide a menu', () => {
    const wrapper = mount({ hideMenu: true });
    expect(wrapper.findAll(pMenu).length).toEqual(0);
  })
});
