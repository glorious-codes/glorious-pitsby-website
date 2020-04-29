import { shallowMount } from '@vue/test-utils';
import pMenu from './menu';

describe('Menu', () => {
  function mount(propsData){
    return shallowMount(pMenu, { propsData });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-menu');
  });

  it('should contain four items', () => {
    const wrapper = mount();
    expect(wrapper.findAll('li').length).toEqual(5);
  });

  it('should execute item click listener on menu item click', () => {
    const itemMock = { some: 'item' };
    const onItemClick = jest.fn();
    const wrapper = mount({ onItemClick });
    wrapper.vm.onMenuItemClick(itemMock);
    expect(onItemClick).toHaveBeenCalledWith(itemMock);
  });
});
