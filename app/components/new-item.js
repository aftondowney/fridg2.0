
import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  newItem: false,
  actions: {
    showItemForm() {
      this.set('newItem', true);
    },
    saveGrocery() {
      var params = {
        name: this.get('name'),
        date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY, h:mm'),
        quantity: this.get('quantity'),
        notes: this.get('notes'),
        category: this.get('category'),
      };
      this.set('newItem', false);
      this.sendAction('saveGrocery', params);
    }
  },
  savePantry() {
    var params = {
      name: this.get('name'),
      date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY, h:mm'),
      quantity: this.get('quantity'),
      notes: this.get('notes'),
      category: this.set('category')
    };
    this.set('newItem', false);
    this.sendAction('savePantry', params);
  }
});
