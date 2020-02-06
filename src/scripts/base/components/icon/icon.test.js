import { shallowMount } from '@vue/test-utils';
import pIcon from './icon';

describe('Icon', () => {
  function mount(propsData){
    return shallowMount(pIcon, { propsData });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-icon');
  });

  it('should build a css class based on icon name', () => {
    const wrapper = mount({ name: 'user' });
    expect(wrapper.classes()).toContain('p-icon-user');
  });

  it('should build inline mask image style based on icon name', () => {
    const wrapper = mount({ name: 'user' });
    expect(wrapper.vm.$el.style.maskImage).toEqual('url(/images/icon-user.svg)');
  });
});
