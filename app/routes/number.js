import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://api.nal.usda.gov/ndb/reports/?nutrients=208&ndbno=' + params.number + '&type=f&format=json&api_key=1JVOH21MhirKVtA1rmgjCFBpVyjHMV5U4mR1FGiO';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.report.food.nutrients;
    }).fail(function(){
              console.log("error");
    });
  }
});






// console.log("response: " + responseJSON.list.item[0].ndbno);
