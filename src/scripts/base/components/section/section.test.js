import { shallowMount } from '@vue/test-utils';
import pSection from './section';

describe('Section', () => {
  function mount(propsData = {}){
    return shallowMount(pSection, { propsData });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-section');
  });

  it('should optionally render a secondary section', () => {
    const wrapper = mount({ theme: 'secondary' });
    expect(wrapper.classes()).toContain('p-section-secondary');
  });
});
