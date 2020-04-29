import { shallowMount } from '@vue/test-utils';
import pRecommendationList from './recommendation-list';

describe('Recommentation List', () => {
  function mount(){
    return shallowMount(pRecommendationList);
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-recommendation-list');
  });
});
