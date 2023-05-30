import { mount } from '@vue/test-utils';
import pAdoptersList from './adopters-list';

describe('Adopters List', () => {
  function mountComponent(){
    return mount(pAdoptersList);
  }

  it('should have appropriate class', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('p-adopters-list-wrapper');
  });


  it('should contain a link to Pitsby adopter form', () => {
    const wrapper = mountComponent();
    const links = wrapper.findAll('a');
    expect(links.at(6).attributes('href')).toEqual('https://forms.gle/X8JuWQRFjrqoUK4P7');
  });
});
