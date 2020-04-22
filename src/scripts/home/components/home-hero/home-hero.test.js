import { shallowMount } from '@vue/test-utils';
import pHero from '@scripts/base/components/hero/hero';
import pHomeHero from './home-hero';

describe('Home Hero', () => {
  function mount(){
    return shallowMount(pHomeHero);
  }

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
    const description = 'Create a beautiful website for your components, writing dead simple files.';
    const wrapper = mount();
    expect(wrapper.find(pHero).attributes('description')).toEqual(description);
  });
});
