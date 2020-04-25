import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import pHomeHero from '@scripts/home/components/home-hero/home-hero';
import homeView from './home';

describe('Home View', () => {
  function mount(){
    return shallowMount(homeView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAll(viewport).length).toEqual(1);
  });

  it('should contain a home panel', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pHomeHero).length).toEqual(1);
  });
});
