import { shallowMount } from '@vue/test-utils';
import analyticsService from '@scripts/base/services/analytics/analytics';
import pMenu from './menu';

describe('Menu', () => {
  function mount(propsData){
    return shallowMount(pMenu, { propsData });
  }

  beforeEach(() => {
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-menu');
  });

  it('should contain four items', () => {
    const wrapper = mount();
    expect(wrapper.findAll('li').length).toEqual(6);
  });

  it('should track menu item click', () => {
    const itemMock = { name: 'Features' };
    const wrapper = mount();
    wrapper.vm.onMenuItemClick(itemMock);
    expect(analyticsService.trackEvent).toHaveBeenCalledWith('clicked menu item', itemMock);
  });

  it('should execute item click listener on menu item click', () => {
    const itemMock = { some: 'item' };
    const onItemClick = jest.fn();
    const wrapper = mount({ onItemClick });
    wrapper.vm.onMenuItemClick(itemMock);
    expect(onItemClick).toHaveBeenCalledWith(itemMock);
  });
});
