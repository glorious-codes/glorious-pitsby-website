import '@styles/newsletter-form.styl';
import pAlert from '@scripts/base/components/alert/alert';
import newsletterResource from '@scripts/base/resources/newsletter';
import analyticsService from '@scripts/base/services/analytics/analytics';
import template from './newsletter-form.html';

const pNewsletterForm = {
  name: 'p-newsletter-form',
  components: {
    pAlert
  },
  data(){
    return {
      alert: null,
      email: '',
      submitButton: {
        disabled: false,
        text: 'Subscribe'
      }
    };
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault();
      this.setAlert(null);
      this.setSubmitButtom({ text: 'Sending...', disabled: true });
      newsletterResource.post({
        email_address: this.email,
        merge_fields: { LANG: 'English' },
        status: 'subscribed'
      }).then(this.onSubmitSuccess, this.onSubmitError);
    },
    onSubmitSuccess(){
      analyticsService.trackEvent('subscribed', { email: this.email });
      this.setAlert({
        theme: 'success',
        message: 'Thanks! You\'ll be notified as soon as I launch Pitsby.'
      });
      this.setEmail('');
      this.onSubmitComplete();
    },
    onSubmitError(){
      this.setAlert({
        theme: 'danger',
        message: 'Sorry, something went wrong. Please, try again.'
      });
      this.onSubmitComplete();
    },
    onSubmitComplete(){
      this.setSubmitButtom({ text: 'Subscribe', disabled: false });
    },
    setSubmitButtom(submitButton){
      this.submitButton = submitButton;
    },
    setAlert(alert){
      this.alert = alert;
    },
    setEmail(email){
      this.email = email;
    }
  },
  template
};

export default pNewsletterForm;
