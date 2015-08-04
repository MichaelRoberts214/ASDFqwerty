import Ember from 'ember';
// import ic from 'ic-ajax';
import jquery from 'jquery';

export default Ember.Route.extend({
  model: function(params) {
    return jquery.ajax({
        url: 'https://api.github.com/repos/' + params.owner + '/' + params.repo + '/releases',
        type: 'get'
    }).then(function(releases) {
      // console.log('releases', releases);
        releases.forEach(function(release) {
          release.created_at = new Date(release.created_at);
          release.published_at = new Date(release.published_at);
        });
        return releases;
    });
  }
});

