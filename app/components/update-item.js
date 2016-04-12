import Ember from 'ember';

export default Ember.Component.extend({
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
        category: this.get('category')
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    },
    sendTo(item) {
      var params = {
        category: this.get('category')
      };
      this.sendAction('sendTo', item, params);
    },
  }
});
