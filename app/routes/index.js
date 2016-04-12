import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    foodLookup(params) {
      this.transitionTo('results', params.food);
    }
  }
});
