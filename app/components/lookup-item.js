import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    itemLookup() {
      var params = {
        item: this.get('item')
      };
      this.sendAction('itemLookup', params);
    }
  }
});
