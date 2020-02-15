import { shallowMount } from '@vue/test-utils';
import pCol from './col';

describe('Column', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pCol, {
      propsData,
      slots: {
        default: content
      }
    });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-col');
  });

  it('should not set size css class by default', () => {
    const wrapper = mount();
    expect(wrapper.classes().includes('p-col-size')).toEqual(false);
  });

  it('should optionally set size css class', () => {
    const wrapper = mount({ size: 3 });
    expect(wrapper.classes()).toContain('p-col-size-3');
  });

  it('should not set offset css class by default', () => {
    const wrapper = mount();
    expect(wrapper.classes().includes('p-col-offset')).toEqual(false);
  });

  it('should optionally set size css class', () => {
    const wrapper = mount({ offset: 3 });
    expect(wrapper.classes()).toContain('p-col-offset-3');
  });

  it('should render some content', () => {
    const wrapper = mount({}, '<p>hello!</p>');
    expect(wrapper.find('p').text()).toEqual('hello!');
  });
});
