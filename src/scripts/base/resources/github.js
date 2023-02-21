const _public = {};

let cache = {};

_public.getRepo = ({ repo }) => {
  if(cache.repo) return Promise.resolve(deepClone(cache.repo));
  return window.fetch(buildRepoUrl(repo)).then(response => response.json()).then(data => {
    cache.repo = data;
    return deepClone(cache.repo);
  });
};

_public.flushCache = () => {
  cache = {};
};

function buildRepoUrl(repo){
  return `https://api.github.com/repos/${repo}`;
}

function deepClone(obj){
  return JSON.parse(JSON.stringify(obj));
}

export default _public;
