import { shallowMount } from '@vue/test-utils';
import pPill from './pill';

describe('Pill', () => {
  function mount(propsData){
    return shallowMount(pPill, { propsData });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-pill');
  });

  it('should render a text', () => {
    const text = 'Install';
    const wrapper = mount({ text });
    expect(wrapper.text()).toEqual(text);
  });
});
