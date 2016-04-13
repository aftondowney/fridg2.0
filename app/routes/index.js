
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    foodLookup(params) {
      this.transitionTo('results', params.food);
    },
    save(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('index');
    }
  },
  model() {
    return this.store.findAll('item');
  },

});
