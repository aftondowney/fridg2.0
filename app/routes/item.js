import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(theItem) {
    var key = config.myApiKey;
    var url = 'http://api.nal.usda.gov/ndb/search/?format=json&q='+ theItem.groceryName +'&sort=n&offset=0&api_key='+ key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(url);
      console.log(responseJSON.list.item);
      return responseJSON.list.item;
    }).fail(function(){
       alert("Your search did not return any results");

    });
  }
});
