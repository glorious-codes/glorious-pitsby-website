import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import privacyView from './privacy';

describe('Privacy View', () => {
  function mount(){
    return shallowMount(privacyView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAll(viewport).length).toEqual(1);
  });
});
