import { shallowMount } from '@vue/test-utils';
import githubResource from '@scripts/base/resources/github';
import pGithubStarLink from './github-star-link';

describe('Github Star Link', () => {
  function mount(propsData){
    return shallowMount(pGithubStarLink, { propsData });
  }

  function stubFetch(){
    githubResource.getRepo = jest.fn(({ repo }) => {
      const response = {
        'user/repo': { stargazers_count: 86 }
      }[repo] || {}
      return Promise.resolve(response);
    })
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
    const wrapper = mount({ repo });
    setTimeout(() => {
      expect(wrapper.find('[data-github-star-link-count]').text()).toEqual('86');
      done();
    })
  })
});
