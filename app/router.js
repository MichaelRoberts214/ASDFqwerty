import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', {path: '/'});
  // this.resource('something', {path: '/something'});
  this.resource('something'/*, function() {
    this.route('show', {path: '/:name'});
  }*/);
  this.resource('releases', {path: '/:owner/:repo/releases'});
});

export default Router;
