import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  sortBy: ['name'],
  sortedItems: Ember.computed.sort('item', 'sortBy'),


  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        name: this.get('name'),
        quantity: this.get('city'),
        notes: this.get('notes'),
        date: this.get('date'),
        exp: this.get('exp'),
        category: this.get('category')
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    },
    sendTo(item, params) {
      this.sendAction('sendTo', item, params);
    },
    delete(item) {
      if(confirm("Are you sure you won't want this again?")) {
        this.sendAction('destroyItem', item);
      }
    }
      }
});
