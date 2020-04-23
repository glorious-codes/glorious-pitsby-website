import { shallowMount } from '@vue/test-utils';
import pCredits from './credits';

describe('Credits', () => {
  function mount(){
    return shallowMount(pCredits);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-credits');
  });
});
