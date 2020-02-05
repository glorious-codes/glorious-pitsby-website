import { shallowMount } from '@vue/test-utils';
import newsletterResource from '@scripts/base/resources/newsletter';
import pNewsletterForm from './newsletter-form';

describe('Newsletter Form', () => {
  function mount({ theme, content = '' } = {}){
    return shallowMount(pNewsletterForm);
  }

  function stubNewsletterPost(responseType, { shouldAbort } = {}){
    newsletterResource.post = jest.fn(() => {
      return {
        then: (successCallback, errorCallback) => {
          if(!shouldAbort) {
            return responseType == 'success' ? successCallback() : errorCallback();
          }
        }
      }
    });
  }

  function submitForm(wrapper){
    wrapper.find('form').trigger('submit');
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('p-newsletter-form');
  });

  it('should post a newsletter subscription on submit', () => {
    const email = 'some@email.com';
    const wrapper = mount();
    wrapper.find('input').setValue(email);
    stubNewsletterPost('success');
    submitForm(wrapper);
    expect(newsletterResource.post).toHaveBeenCalledWith({
      email_address: email,
      merge_fields: { LANG: 'English' },
      status: 'subscribed'
    });
  });

  it('should show submit button text as "Subscribe" by default', () => {
    const wrapper = mount();
    expect(wrapper.vm.submitButton.text).toEqual('Subscribe');
  });

  it('should show submit button text as "Sending..." on submit', () => {
    const wrapper = mount();
    stubNewsletterPost('success', { shouldAbort : true });
    submitForm(wrapper);
    expect(wrapper.vm.submitButton.text).toEqual('Sending...');
  });

  it('should submit button be enabled by default', () => {
    const wrapper = mount();
    expect(wrapper.vm.submitButton.disabled).toEqual(false);
  });

  it('should submit button be disabled on submit', () => {
    const wrapper = mount();
    stubNewsletterPost('success', { shouldAbort : true });
    submitForm(wrapper);
    expect(wrapper.vm.submitButton.disabled).toEqual(true);
  });

  it('should show success alert on submit success', () => {
    const wrapper = mount();
    stubNewsletterPost('success');
    submitForm(wrapper);
    expect(wrapper.vm.alert.theme).toEqual('success');
    expect(wrapper.vm.alert.message).toEqual(
      'Thanks! You\'ll be notified as soon as we launch Pitsby.'
    );
  });

  it('should clear email on submit success', () => {
    const wrapper = mount();
    wrapper.find('input').setValue('some@email.com');
    stubNewsletterPost('success');
    submitForm(wrapper);
    expect(wrapper.vm.email).toEqual('');
  });

  it('should show error alert on submit error', () => {
    const wrapper = mount();
    stubNewsletterPost('error');
    submitForm(wrapper);
    expect(wrapper.vm.alert.theme).toEqual('danger');
    expect(wrapper.vm.alert.message).toEqual(
      'Sorry, something went wrong. Please, try again.'
    );
  });
});
