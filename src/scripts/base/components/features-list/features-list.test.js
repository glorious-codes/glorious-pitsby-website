import { shallowMount } from '@vue/test-utils';
import featuresList from './features-list';

describe('Features List', () => {
  function mount(){
    return shallowMount(featuresList);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.find('ul').classes()).toContain('p-features-list');
  });
});
