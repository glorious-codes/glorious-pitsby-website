import { shallowMount } from '@vue/test-utils';
import homeGreeting from './home-greeting';

describe('Home Greeting', () => {
  function mount(){
    return shallowMount(homeGreeting);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('home-greeting');
  });

  it('should have welcome heading', () => {
    const wrapper = mount();
    expect(wrapper.find('h1').text()).toContain('Welcome home!');
  });
});
