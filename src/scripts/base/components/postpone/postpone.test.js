import Vue from '@vue';
import { shallowMount } from '@vue/test-utils';
import pPostpone from './postpone';

describe('Postpone', () => {
  function mount(propsData, content){
    return shallowMount(pPostpone, {
      propsData,
      slots: {
        default: content
      }
    });
  }

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  })

  it('should postpone its content rendering by given time', () => {
    const wrapper = mount({ delay: 200 }, '<p>Content</p>');
    expect(wrapper.findAll('p')).toHaveLength(0);
    jest.advanceTimersByTime(200);
    Vue.nextTick(() => {
      expect(wrapper.findAll('p')).toHaveLength(1);
    });
  });
});
