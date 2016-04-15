import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('item', {
      orderBy: 'category',
      equalTo: 'pantry'
    });
  },

  actions: {
    sendTo(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('pantry');
    },
    update(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('pantry');
    },
    itemLookup(groceryName) {
      this.transitionTo('item', groceryName);
    }
  }
});
