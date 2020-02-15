import ENV from '@environment';
import seoService from './seo';

describe('SEO Service', () => {
  it('should build items', () => {
    const data = {
      title: 'Title',
      description: 'Description',
      keywords: 'Keywords',
      imageFilename: 'test.png'
    };

    expect(seoService.buildHead(data)).toEqual({
      title: {
        inner: 'Title'
      },
      meta: [
        { name: 'application-name', content: '' },
        { name: 'description', content: 'Description', id: 'desc' },
        { name: 'keywords', content: 'Keywords' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Title' },
        { name: 'twitter:description', content: 'Description' },
        { name: 'twitter:site', content: '@gloriouscodes' },
        { name: 'twitter:creator', content: '@rcamargo' },
        { itemprop: 'name', content: 'Title' },
        { itemprop: 'desc', content: 'Description' },
        { property: 'og:title', content: 'Title' },
        { property: 'og:image', content: `${ENV.APP.BASE_URL}/images/test.png` }
      ]
    });
  });

  it('should accept a multi-line description', () => {
    const data = seoService.buildHead({
      description: [
        'first part',
        'second part.'
      ]
    });
    expect(data.meta[1].content).toEqual('first part second part.');
  });

  it('should use a default image if no image has been passed', () => {
    const data = seoService.buildHead();
    expect(data.meta[11].content).toEqual(`${ENV.APP.BASE_URL}/images/logo-pitsby-512x512.png`);
  });

  it('should optionally use a custom image', () => {
    const data = seoService.buildHead({ imageFilename: 'other-image.png' });
    expect(data.meta[11].content).toEqual(`${ENV.APP.BASE_URL}/images/other-image.png`);
  });

  it('should set a regular twitter card by default', () => {
    const data = seoService.buildHead({});
    expect(data.meta[3].content).toEqual('summary');
  });

  it('should optionally set a large twitter card', () => {
    const data = seoService.buildHead({ imageSize: 'large' });
    expect(data.meta[3].content).toEqual('summary_large_image');
  });
});
