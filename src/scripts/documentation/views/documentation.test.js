import { shallowMount } from '@vue/test-utils';
import code from '@scripts/documentation/constants/code';
import pHero from '@scripts/base/components/hero/hero';
import pViewport from '@scripts/base/components/viewport/viewport';
import pStaticEditor from '@scripts/base/components/static-editor/static-editor';
import documentationView from './documentation';

describe('Documentation View', () => {
  function mount(){
    return shallowMount(documentationView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pViewport).length).toEqual(1);
  });

  it('should contain a hero', () => {
    const wrapper = mount();
    expect(wrapper.find(pHero).attributes('title')).toEqual('Documentation');
  });

  it('should contain two static editors', () => {
    const wrapper = mount();
    expect(wrapper.findAll(pStaticEditor).length).toEqual(2);
    expect(wrapper.findAll(pStaticEditor).at(0).attributes('code')).toEqual(code.configuration);
    expect(wrapper.findAll(pStaticEditor).at(1).attributes('code')).toEqual(code.documentation);
  });
});
