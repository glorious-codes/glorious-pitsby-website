import '@styles/github-star-link.styl';
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
    window.fetch(this.buildUrl(this.repo))
      .then(response => response.json())
      .then(({ stargazers_count }) => this.setStars(stargazers_count));
  },
  methods: {
    buildUrl(){
      return `https://api.github.com/repos/${this.repo}`;
    },
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
