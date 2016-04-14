import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  model() {
    return this.store.findAll('item');
  },

  actions: {
    update(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('all');
    },
    sendTo(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('all');
    },
    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('all');
    },
    itemLookup(groceryName) {
      this.transitionTo('item', groceryName);
    }
  }
});
