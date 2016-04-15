import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    saveSearched(params) {
      var newSearchedItem = this.store.createRecord('item', params);
      newSearchedItem.save();
      this.transitionTo('index');
    }
  },
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=' + key + '=208&ndbno=' + params.number + '&nutrients=204&nutrients=606&nutrients=645&nutrients=601&nutrients=307&nutrients=205&nutrients=291&nutrients=269&nutrients=203';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.report.foods);
      return responseJSON.report.foods;
    }).fail(function(){
        alert("Your search did not return any results");

    });
  }
});










// console.log("response: " + responseJSON.list.item[0].ndbno);
