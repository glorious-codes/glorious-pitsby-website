import { shallowMount } from '@vue/test-utils';
import pSection from './section';

describe('Section', () => {
  function mount(){
    return shallowMount(pSection);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-section');
  });
});
