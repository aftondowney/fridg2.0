import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  model: function() {
    return this.store.query('item', {
      orderBy: 'category',
      equalTo: 'grocery'
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
      this.transitionTo('grocery');
    },
    update(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('grocery');
    },
    itemLookup(groceryName) {
      this.transitionTo('item', groceryName);
    }
  }
});
