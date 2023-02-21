import githubResource from './github';

describe('Github Resources', () => {
  function stubFetch({ response }){
    window.fetch = jest.fn(url => {
      return {
        'https://api.github.com/repos/glorious-codes/glorious-pitsby': Promise.resolve({ json: () => Promise.resolve(response) })
      }[url]
    });
  }

  afterEach(() => {
    githubResource.flushCache();
  });

  it('should fetch repo data', done => {
    const response = { stargazers_count: 86 };
    stubFetch({ response });
    const repo = 'glorious-codes/glorious-pitsby';
    githubResource.getRepo({ repo }).then(data => {
      expect(data.stargazers_count).toEqual(response.stargazers_count);
      done();
    });
  });

  it('should not fetch repo data if it has already been fetched once', done => {
    const response = { stargazers_count: 123 };
    stubFetch({ response });
    const repo = 'glorious-codes/glorious-pitsby';
    githubResource.getRepo({ repo });
    setTimeout(() => {
      githubResource.getRepo({ repo }).then(data => {
        expect(data.stargazers_count).toEqual(response.stargazers_count);
        expect(window.fetch).toHaveBeenCalledTimes(1);
        done();
      });
    }, 100)
  })
});
