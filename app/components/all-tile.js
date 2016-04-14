import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['name'],
  sortedItems: Ember.computed.sort('item', 'sortBy'),


  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item, params) {
      this.sendAction('update', item, params);
    },
    sendTo(item, params) {
      this.sendAction('sendTo', item, params);
    },
    delete(item) {
      if(confirm("Are you sure you won't want this again?")) {
        this.sendAction('destroyItem', item);
      }
    },
    itemLookup(groceryName) {
      this.sendAction('itemLookup', groceryName);
    }
  }
});
