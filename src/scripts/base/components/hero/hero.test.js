import { shallowMount } from '@vue/test-utils';
import pHero from './hero';

describe('Hero', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pHero, { propsData, slots: { default: content } });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-hero');
  });

  it('should optionally render a title', () => {
    const title = 'Title';
    const wrapper = mount({ title });
    expect(wrapper.find('h1').text()).toEqual(title);
  });

  it('should optionally render a description', () => {
    const description = 'Description';
    const wrapper = mount({ description });
    expect(wrapper.find('p').text()).toEqual(description);
  });

  it('should render some content', () => {
    const wrapper = mount({}, '<strong>hello!</strong>');
    expect(wrapper.find('strong').text()).toEqual('hello!');
  });
});
