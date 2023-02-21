import '@styles/github-star-link.styl';
import githubResource from '@scripts/base/resources/github';
import template from './github-star-link.html';

const pGithubStarLink = {
  name: 'p-github-star-link',
  props: ['repo'],
  data(){
    return {
      stars: null,
    };
  },
  mounted(){
    githubResource.getRepo({ repo: this.repo }).then(({ stargazers_count }) => {
      this.setStars(stargazers_count);
    });
  },
  methods: {
    setStars(stars){
      this.stars = stars;
    }
  },
  computed: {
    href(){
      return `https://github.com/${this.repo}/stargazers`;
    }
  },
  template
};

export default pGithubStarLink;
