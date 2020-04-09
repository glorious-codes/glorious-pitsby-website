import { shallowMount } from '@vue/test-utils';
import pMenu from './menu';

describe('Menu', () => {
  function mount(){
    return shallowMount(pMenu);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-menu');
  });

  it('should contain four items', () => {
    const wrapper = mount();
    expect(wrapper.findAll('li').length).toEqual(4);
  });
});
