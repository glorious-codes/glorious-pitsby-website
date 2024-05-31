import { shallowMount } from '@vue/test-utils';
import routeService from '@scripts/base/services/route/route';
import pGithubStarLink from '@scripts/base/components/github-star-link/github-star-link';
import pMenu from './menu';

describe('Menu', () => {
  function mount(propsData){
    return shallowMount(pMenu, { propsData });
  }

  beforeEach(() => {
    routeService.getQueryParams = jest.fn();
  });

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-menu');
  });

  it('should contain seven items', () => {
    const wrapper = mount();
    expect(wrapper.findAll('li').length).toEqual(7);
  });

  it('should execute item click listener on menu item click', () => {
    const itemMock = { some: 'item' };
    const onItemClick = jest.fn();
    const wrapper = mount({ onItemClick });
    wrapper.vm.onMenuItemClick(itemMock);
    expect(onItemClick).toHaveBeenCalledWith(itemMock);
  });

  it('should render Github star button by default', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pGithubStarLink)).toHaveLength(1);
  });

  it('should optionally not render Github star button if prerender search param has been found on url', () => {
    routeService.getQueryParams = jest.fn(() => ({ prerender: 'enabled' }))
    const wrapper = mount();
    expect(wrapper.findAll(pGithubStarLink)).toHaveLength(0);
  });
});
