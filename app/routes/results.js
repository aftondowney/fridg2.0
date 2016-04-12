import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://api.nal.usda.gov/ndb/search/?format=xml&q=butter&max=25&offset=0&api_key=1JVOH21MhirKVtA1rmgjCFBpVyjHMV5U4mR1FGiO';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
