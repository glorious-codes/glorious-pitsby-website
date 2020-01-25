import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import homeGreeting from '@scripts/home/components/home-greeting/home-greeting';
import homeView from './home';

describe('Home View', () => {
  function mount(){
    return shallowMount(homeView);
  }

  it('should have contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAll(viewport).length).toEqual(1);
  });

  it('should have contain a home greeting', () => {
    const wrapper = mount();
    expect(wrapper.findAll(homeGreeting).length).toEqual(1);
  });
});
