import { shallowMount } from '@vue/test-utils';
import pBasicUsage from './basic-usage';

describe('Column', () => {
  function mount(){
    return shallowMount(pBasicUsage);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-basic-usage');
  });
});
