import { shallowMount } from '@vue/test-utils';
import windowService from '@scripts/base/services/window/window';
import pSidebar from '@scripts/base/components/sidebar/sidebar';
import pTopbar from '@scripts/base/components/topbar/topbar';
import viewport from './viewport';

describe('Viewport', () => {
  function mount(){
    return shallowMount(viewport);
  }

  beforeEach(() => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    windowService.getViewportWidth = jest.fn(() => 768);
  })

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-viewport');
  });

  it('should set window resize listener on initialize', () => {
    const wrapper = mount();
    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    expect(window.addEventListener).toHaveBeenCalledWith('resize', wrapper.vm.onWindowResize);
  });

  it('should remove window resize listener on destroy', () => {
    const wrapper = mount();
    wrapper.vm.$destroy();
    expect(window.removeEventListener).toHaveBeenCalledTimes(1);
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', wrapper.vm.onWindowResize);
  });

  it('should show sidebar if window width is lower than 1024px', () => {
    windowService.getViewportWidth = jest.fn(() => 768);
    const wrapper = mount();
    expect(wrapper.findAll(pSidebar)).toHaveLength(1);
  });

  it('should hide sidebar if window width is greater or equal to 1024px', () => {
    windowService.getViewportWidth = jest.fn(() => 1024);
    const wrapper = mount();
    expect(wrapper.findAll(pSidebar)).toHaveLength(0);
  });

  it('should show sidebar if window width gets lower than 1024px on window resize', done => {
    windowService.getViewportWidth = jest.fn(() => 1024);
    const wrapper = mount();
    expect(wrapper.findAll(pSidebar)).toHaveLength(0);
    windowService.getViewportWidth = jest.fn(() => 1023);
    wrapper.vm.onWindowResize();
    setTimeout(() => {
      expect(wrapper.findAll(pSidebar)).toHaveLength(1);
      done();
    })
  });

  it('should show menu if window width is greater or equal to 1024px', () => {
    windowService.getViewportWidth = jest.fn(() => 1024);
    const wrapper = mount();
    expect(wrapper.find(pTopbar).props().hideMenu).toEqual(false);
  });

  it('should hide menu if window width is lower than 1024px', () => {
    windowService.getViewportWidth = jest.fn(() => 768);
    const wrapper = mount();
    expect(wrapper.find(pTopbar).props().hideMenu).toEqual(true);
  });

  it('should show menu if window width gets greater or equal to 1024px on window resize', done => {
    windowService.getViewportWidth = jest.fn(() => 768);
    const wrapper = mount();
    expect(wrapper.find(pTopbar).props().hideMenu).toEqual(true);
    windowService.getViewportWidth = jest.fn(() => 1024);
    wrapper.vm.onWindowResize();
    setTimeout(() => {
      expect(wrapper.find(pTopbar).props().hideMenu).toEqual(false);
      done();
    })
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pTopbar).length).toEqual(1);
  });
});
