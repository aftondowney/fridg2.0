import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')) {
      alert('Please Login to view.')
      this.transitionTo('application');
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
  }
});
