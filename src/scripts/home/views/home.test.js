import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import pHomePanel from '@scripts/home/components/home-panel/home-panel';
import homeView from './home';

describe('Home View', () => {
  function mount(){
    return shallowMount(homeView);
  }

  it('should have contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAll(viewport).length).toEqual(1);
  });

  it('should have contain a home panel', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pHomePanel).length).toEqual(1);
  });
});
