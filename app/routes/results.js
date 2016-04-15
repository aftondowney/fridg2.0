import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://api.nal.usda.gov/ndb/search/?format=json&q=' + params.food + '&offset=0&api_key=1JVOH21MhirKVtA1rmgjCFBpVyjHMV5U4mR1FGiO';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.list.item;
    }).fail(function(){
              alert("Your search did not return any results");
    });
  }
});
