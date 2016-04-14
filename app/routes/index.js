import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    foodLookup(params) {
      this.transitionTo('results', params.food);
    },
    numberLookup(params) {
      this.transitionTo('number', params.number);
    },
    save(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('index');
    },
    itemLookup(params) {
      this.transitionTo('item', params.item);
    },
  },
  model() {
    return this.store.findAll('item');
  }
});
