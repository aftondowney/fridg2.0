
import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  newItem: false,
  actions: {
    showItemForm() {
      this.set('newItem', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY'),
        exp: this.get('exp') ? this.get('exp') : moment().format('MMMM Do YYYY'),
        quantity: this.get('quantity') ? this.get('quantity') : '',
        notes: this.get('notes') ? this.get('notes') : '',
        category: this.get('category'),
      };
      this.set('newItem', false);
      this.sendAction('save', params);
    }
  },
});
