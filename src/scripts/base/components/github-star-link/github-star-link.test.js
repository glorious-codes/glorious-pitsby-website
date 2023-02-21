import { shallowMount } from '@vue/test-utils';
import pGithubStarLink from './github-star-link';

describe('Github Star Link', () => {
  function mount(propsData){
    return shallowMount(pGithubStarLink, { propsData });
  }

  function stubFetch({ url, response } = {}){
    window.fetch = jest.fn(urlParam => {
      if(urlParam === url) return Promise.resolve({ json: () => Promise.resolve(response) });
      return Promise.resolve({ json: () => Promise.resolve({}) });
    });
  }

  beforeEach(() => {
    stubFetch()
  })

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-github-star-link');
  });

  it('should contain a link to the stargazers url of a given repo', () => {
    const wrapper = mount({ repo: 'user/repo' });
    expect(wrapper.vm.$el.getAttribute('href')).toEqual('https://github.com/user/repo/stargazers');
  })

  it('should show the number of stars received by the given repo', done => {
    const repo = 'user/repo';
    stubFetch({
      url: `https://api.github.com/repos/${repo}`,
      response: { stargazers_count: 86 }
    });
    const wrapper = mount({ repo });
    setTimeout(() => {
      expect(wrapper.find('[data-github-star-link-count]').text()).toEqual('86');
      done();
    })
  })
});
