import { shallowMount } from '@vue/test-utils';
import pdButton from './button';

describe('Button', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pdButton, { propsData, slots: { default: content } });
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-button');
  });

  it('should set type as button by default', () => {
    const wrapper = mount();
    expect(wrapper.attributes('type')).toEqual('button');
  });

  it('should optionally set a custom type', () => {
    const type = 'submit';
    const wrapper = mount({ type });
    expect(wrapper.attributes('type')).toEqual(type);
  });

  it('should optionally set component HTML tag', () => {
    const wrapper = mount({ tag: 'a' });
    expect(wrapper.vm.$el.tagName).toEqual('A');
  });

  it('should optionally set an anchor href', () => {
    const href = 'https://pitsby.compilorama.com';
    const wrapper = mount({ tag: 'a', href });
    expect(wrapper.attributes('href')).toEqual(href);
  });

  it('should optionally set an anchor target', () => {
    const target = '_blank';
    const wrapper = mount({ tag: 'a', target });
    expect(wrapper.attributes('target')).toEqual(target);
  });

  it('should optionally render component as router link', () => {
    const to = "{ name: 'home' }";
    const wrapper = mount({ to });
    expect(wrapper.attributes('to')).toEqual(to);
  });

  it('should optionally set a primary theme', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.classes()).toContain('p-button-primary');
  });

  it('should optionally set a secondary theme', () => {
    const wrapper = mount({ theme: 'secondary' });
    expect(wrapper.classes()).toContain('p-button-secondary');
  });

  it('should optionally display as block', () => {
    const wrapper = mount({ block: true });
    expect(wrapper.classes()).toContain('p-button-block');
  });

  it('should be enabled by default', () => {
    const wrapper = mount();
    expect(wrapper.attributes('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const wrapper = mount({ disabled: true });
    expect(wrapper.attributes('disabled')).toBeTruthy();
  });

  it('should optionally be faceless', () => {
    const wrapper = mount({ faceless: true });
    expect(wrapper.classes()).toContain('p-button-faceless');
  });

  it('should execute click callback on click', () => {
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.find('button').trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should render some content', () => {
    const wrapper = mount({}, '<p>Click here</p>');
    expect(wrapper.text()).toEqual('Click here');
  });
});
