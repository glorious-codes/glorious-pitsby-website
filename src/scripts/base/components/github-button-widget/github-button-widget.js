import '@styles/github-button-widget.styl';
import template from './github-button-widget.html';

export default {
  name: 'p-github-button-widget',
  props: {
    username: {
      type: String
    },
    repositoryName: {
      type: String
    }
  },
  data(){
    return {
      repositoryLink: null,
      ariaLabel: null,
      cssClass: '',
    };
  },
  mounted(){
    const slug = this.buildRepositorySlug(this.username, this.repositoryName);
    this.setRepositoryLink(this.buildRepositoryLink(slug));
    this.setAriaLabel(this.buildAriaLabel(slug));
    this.appendGithubScriptTagOnBody(this.getGithubScriptTag());
    setTimeout(() => this.setCssClass('p-github-button-widget-visible'), 750);
  },
  methods: {
    buildRepositorySlug(username, repositoryName){
      return `${username}/${repositoryName}`;
    },
    buildRepositoryLink(repositorySlug){
      return `https://github.com/${repositorySlug}`;
    },
    setRepositoryLink(link){
      this.repositoryLink = link;
    },
    buildAriaLabel(repositorySlug){
      return `Star ${repositorySlug} on GitHub`;
    },
    setAriaLabel(label){
      this.ariaLabel = label;
    },
    appendGithubScriptTagOnBody(tag){
      document.body.appendChild(tag);
    },
    getGithubScriptTag(){
      const existingTag = document.querySelector('[data-github-script-tag]');
      if(existingTag)
        existingTag.remove();
      return this.buildGithubScriptTag();
    },
    buildGithubScriptTag(){
      const tag = this.buildGithubBaseScriptTag();
      tag.setAttribute('data-github-script-tag','');
      return tag;
    },
    buildGithubBaseScriptTag(){
      const tag = document.createElement('script');
      tag.setAttribute('async', 'true');
      tag.setAttribute('defer', '');
      tag.setAttribute('src', 'https://buttons.github.io/buttons.js');
      return tag;
    },
    setCssClass(cssClass){
      this.cssClass = cssClass;
    }
  },
  template
};
