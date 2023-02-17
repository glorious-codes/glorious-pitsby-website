export default {
  APP: {
    BASE_URL: 'http://localhost:7000'
  },
  ANALYTICS: {
    PLAUSIBLE: {
      DOMAIN: 'dev.pitsby.com',
      OPTIONS: { trackLocalhost: false }
    }
  },
  VERVET: {
    BASE_URL: 'http://localhost:9001',
    PROJECTS: {
      NEWSLETTER: {
        ID: '569e642a-9f75-41dc-9a96-7ac66bc6eef9',
        LIST_ID: 'aec1ae3c35'
      }
    }
  }
};
