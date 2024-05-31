import { shallowMount } from '@vue/test-utils';
import pLink from './link';

describe('Link', () => {
  function mountComponent(propsData, content = ''){
    return shallowMount(pLink, { propsData, stubs: ['router-link'], slots: { default: content } });
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('p-link');
  });

  it('should render a router link for internal links', () => {
    const wrapper = mountComponent({ routeName: 'privacy' });
    expect(wrapper.findAll('router-link-stub').length).toEqual(1);
  });

  it('should render some text for internal links', () => {
    const wrapper = mountComponent({ routeName: 'codes' }, 'Link Text');
    expect(wrapper.find('router-link-stub').text()).toEqual('Link Text');
  });

  it('should render an anchor href', () => {
    const href = 'https://pitsby.compilorama.com';
    const wrapper = mountComponent({ href });
    expect(wrapper.find('a').attributes('href')).toEqual(href);
  });

  it('should render some text for external links', () => {
    const text = 'Pitsby';
    const wrapper = mountComponent({ href: 'https://pitsby.compilorama.com' }, text);
    expect(wrapper.find('a').text()).toEqual(text);
  });

  it('should anchor links contain a target attribute as blank by default', () => {
    const wrapper = mountComponent({ href: 'https://pitsby.compilorama.com' });
    expect(wrapper.find('a').attributes('target')).toEqual('_blank');
  });

  it('should anchor links optionally contain a custom target attribute', () => {
    const target = '_self'
    const wrapper = mountComponent({ href: '#basics', target });
    expect(wrapper.find('a').attributes('target')).toEqual(target);
  });

  it('should execute click listener on link click', () => {
    const link = { href: 'https://pitsby.compilorama.com', routeName: 'home', target: '_self' };
    const onClick = jest.fn();
    const wrapper = mountComponent({ onClick, ...link });
    wrapper.vm.onLinkClick();
    expect(onClick).toHaveBeenCalledWith(link);
  });
});
