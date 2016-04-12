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
      };
      this.set('updateItemForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
