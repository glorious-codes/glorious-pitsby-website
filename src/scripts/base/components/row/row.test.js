import { mount } from '@vue/test-utils';
import pRow from './row';

describe('Row', () => {
  function mountComponent(propsData, slots){
    return mount(pRow, {propsData, slots});
  }

  it('should have appropriate class', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('p-row');
  });

  it('should optionally center child elements vertically', () => {
    const wrapper = mountComponent({verticalCentered: true});
    expect(wrapper.classes().includes('p-row-vertical-centered')).toEqual(true);
  });

  it('should optionally center child elements horizontally', () => {
    const wrapper = mountComponent({horizontalCentered: true});
    expect(wrapper.classes().includes('p-row-horizontal-centered')).toEqual(true);
  });

  it('should allow vertical offset option', () => {
    const wrapper = mountComponent({ verticalOffset: '3' });
    expect(wrapper.classes().includes('p-row-vertical-offset-3')).toEqual(true);
  });

  it('should render some content', () => {
    const wrapper = mountComponent(null, {default: '<p>hello!</p>'});
    expect(wrapper.find('p').text()).toEqual('hello!');
  });
});
