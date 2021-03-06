/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'asdfqwerty',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    // Allow scss and sass to be compiled. Add path to non dist folder style.
    sassOptions: {
      includePaths: [
        'app/styles'
      ]
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    // Content security policy error local fix
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://api.github.com",
      'font-src': "http://fonts.gstatic.com",
      'connect-src': "'self' https://api.github.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'frame-src': "'none'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
