import { shallowMount } from '@vue/test-utils';
import windowService from '@scripts/base/services/window/window';
import pGithubStarLink from '@scripts/base/components/github-star-link/github-star-link';
import pHero from '@scripts/base/components/hero/hero';
import pHomeHero from './home-hero';

describe('Home Hero', () => {
  function mount(){
    return shallowMount(pHomeHero);
  }

  beforeEach(() => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    windowService.getViewportWidth = jest.fn(() => 768);
  });

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-home-hero');
  });

  it('should contain a hero title', () => {
    const title = 'Have a nice time documenting components.';
    const wrapper = mount();
    expect(wrapper.find(pHero).attributes('title')).toEqual(title);
  });

  it('should contain a hero description', () => {
    const description = 'Create beautiful documentation for your components by writing dead simple files.';
    const wrapper = mount();
    expect(wrapper.find(pHero).attributes('description')).toEqual(description);
  });

  it('should show sidebar if window width gets lower than 1024px on window resize', done => {
    windowService.getViewportWidth = jest.fn(() => 1024);
    const wrapper = mount();
    expect(wrapper.findAll(pGithubStarLink)).toHaveLength(0);
    windowService.getViewportWidth = jest.fn(() => 1023);
    wrapper.vm.onWindowResize();
    setTimeout(() => {
      expect(wrapper.findAll(pGithubStarLink)).toHaveLength(1);
      done();
    })
  });

  it('should hide github star link if window width is greater or equal to 1024px', () => {
    windowService.getViewportWidth = jest.fn(() => 1024);
    const wrapper = mount();
    expect(wrapper.findAll(pGithubStarLink)).toHaveLength(0);
  });

  it('should show github star link if window width is lower than 1024px', () => {
    windowService.getViewportWidth = jest.fn(() => 768);
    const wrapper = mount();
    expect(wrapper.findAll(pGithubStarLink)).toHaveLength(1);
  });

  it('should remove window resize listener on destroy', () => {
    const wrapper = mount();
    wrapper.vm.$destroy();
    expect(window.removeEventListener).toHaveBeenCalledTimes(1);
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', wrapper.vm.onWindowResize);
  });
});
