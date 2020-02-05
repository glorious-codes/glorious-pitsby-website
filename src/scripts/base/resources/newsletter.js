import ENV from '@environment';
import vervetResource from './vervet';

const _public = {};

_public.post = data => {
  const { ID, LIST_ID } = getNewsletterProject();
  return vervetResource.post(ID, `lists/${LIST_ID}/members`, data);
};

function getNewsletterProject(){
  return ENV.VERVET.PROJECTS.NEWSLETTER;
}

export default _public;
