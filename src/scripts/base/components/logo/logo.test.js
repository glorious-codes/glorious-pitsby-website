import { shallowMount } from '@vue/test-utils';
import pLogo from './logo';

describe('Logo', () => {
  function mount(){
    return shallowMount(pLogo);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-logo');
  });
});
