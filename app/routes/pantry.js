import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('item', {
      orderBy: 'category',
      equalTo: 'pantry'
    });
  },
  actions: {
    sendToGrocery(item) {
      debugger;
      item.save();
      this.transitionTo("pantry");
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
  }
});
