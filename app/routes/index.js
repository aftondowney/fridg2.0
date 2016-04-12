
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },

  actions: {
    save(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('index');
    },
}
});
