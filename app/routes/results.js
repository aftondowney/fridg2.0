import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://api.nal.usda.gov/ndb/search/?format=json&q=' + params.food + '&offset=0&api_key=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.list.item;
    }).fail(function(){
              alert("Your search did not return any results");
    });
  }
});
