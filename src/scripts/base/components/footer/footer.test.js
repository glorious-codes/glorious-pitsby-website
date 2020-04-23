import { shallowMount } from '@vue/test-utils';
import pCredits from '@scripts/base/components/credits/credits';
import pFooter from './footer';

describe('Footer', () => {
  function mount(){
    return shallowMount(pFooter);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-footer');
  });

  it('should contain credits', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pCredits).length).toEqual(1);
  });
});
