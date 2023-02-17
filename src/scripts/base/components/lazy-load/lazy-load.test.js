import { shallowMount } from '@vue/test-utils';
import fyzer from '@glorious/fyzer';
import pLazyLoad from './lazy-load';

describe('Lazy Load', () => {
  function mount(){
    return shallowMount(pLazyLoad);
  }

  beforeEach(() => {
    fyzer.subscribe = jest.fn(() => '123');
    fyzer.unsubscribe = jest.fn();
  })

  it('should observe content position on initialize', () => {
    const wrapper = mount();
    expect(fyzer.subscribe).toHaveBeenCalledTimes(1);
    expect(fyzer.subscribe).toHaveBeenCalledWith(wrapper.vm.$el, wrapper.vm.onBecomeVisible);
  });

  it('should set element as "above the fold" on become visible', () => {
    const wrapper = mount();
    wrapper.vm.onBecomeVisible();
    expect(wrapper.vm.isAbovePageFold).toEqual(true);
    expect(fyzer.unsubscribe).toHaveBeenCalledTimes(1);
    expect(fyzer.unsubscribe).toHaveBeenCalledWith('123');
  });

  it('should stop observing content position on destroy', () => {
    const wrapper = mount();
    wrapper.vm.$destroy();
    expect(fyzer.unsubscribe).toHaveBeenCalledTimes(1);
    expect(fyzer.unsubscribe).toHaveBeenCalledWith('123');
  });
});
