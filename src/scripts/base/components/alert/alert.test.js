import { shallowMount } from '@vue/test-utils';
import pAlert from './alert';

describe('Alert', () => {
  function mount({ theme, content = '' } = {}){
    return shallowMount(pAlert, {
      propsData: { theme },
      slots: { default: content }
    });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-alert');
  });

  it('should optionally render a success alert', () => {
    const wrapper = mount({ theme: 'success' });
    expect(wrapper.classes()).toContain('p-alert-success');
  });

  it('should optionally render a danger alert', () => {
    const wrapper = mount({ theme: 'danger' });
    expect(wrapper.classes()).toContain('p-alert-danger');
  });

  it('should render some content', () => {
    const wrapper = mount({content: '<strong>hello!</strong>'});
    expect(wrapper.find('strong').text()).toEqual('hello!');
  });
});
