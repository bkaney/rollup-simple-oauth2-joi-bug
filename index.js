require('@babel/polyfill');
const oauth2 = require('simple-oauth2');

const credentials = {
  client: {
    id: '<client-id>',
    secret: '<client-secret>'
  },
  auth: {
    tokenHost: 'https://api.oauth.com'
  }
};

// Initialize the OAuth2 Library
const auth = oauth2.create(credentials);

module.exports = { auth: auth };
