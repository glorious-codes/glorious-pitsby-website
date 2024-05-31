import { shallowMount } from '@vue/test-utils';
import pArrowLink from './arrow-link';

describe('Arrow Link', () => {
  function mount(propsData, content = ''){
    return shallowMount(pArrowLink, { propsData, slots: { default: content } });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-arrow-link');
  });

  it('should render a href', () => {
    const href = 'https://pitsby-demo.compilorama.com';
    const wrapper = mount({ href });
    expect(wrapper.find('a').attributes('href')).toEqual(href);
  });

  it('should render a target as self if target is not given', () => {
    const wrapper = mount();
    expect(wrapper.find('a').attributes('target')).toEqual('_self');
  });

  it('should optionally render a custom target', () => {
    const target = '_blank';
    const wrapper = mount({ target });
    expect(wrapper.find('a').attributes('target')).toEqual(target);
  });

  it('should render a text', () => {
    const text = 'Click Here';
    const wrapper = mount({}, `<strong>${text}</strong>`);
    expect(wrapper.find('strong').text()).toEqual(text);
  });
});
