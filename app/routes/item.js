import Ember from 'ember';

export default Ember.Route.extend({
  model: function(theItem) {
    var url = 'http://api.nal.usda.gov/ndb/search/?format=json&q='+ theItem.groceryName +'&sort=n&offset=0&api_key=1JVOH21MhirKVtA1rmgjCFBpVyjHMV5U4mR1FGiO';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(url);
      console.log(responseJSON.list.item);
      return responseJSON.list.item;
    }).fail(function(){
       alert("Your search did not return any results");

    });
  }
});
