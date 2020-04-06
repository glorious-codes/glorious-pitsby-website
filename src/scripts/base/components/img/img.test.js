import { shallowMount } from '@vue/test-utils';
import pImg from './img';

describe('Image', () => {
  function mount(propsData = {}){
    return shallowMount(pImg, { propsData });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-img');
  });

  it('should build image source with given filename', () => {
    const wrapper = mount({ filename: 'user.svg' });
    expect(wrapper.attributes('src')).toEqual('/images/user.svg');
  });

  it('should build image alternative text with given alt', () => {
    const alt = 'user';
    const wrapper = mount({ alt });
    expect(wrapper.attributes('alt')).toEqual(alt);
  });

  it('should build image title with given title', () => {
    const title = 'user icon';
    const wrapper = mount({ title });
    expect(wrapper.attributes('title')).toEqual(title);
  });
});
