
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
        date: this.get('date') ? this.get('date') : moment().format('DD MMMM YYYY'),
        exp: this.get('date') ? this.get('date') : moment().add(3,'days').format('DD MMMM YYYY, hh:mm a'),
        expWeek: this.get('date') ? this.get('date') : moment().add(7,'days').format('DD MMMM YYYY, hh:mm a'),
        quantity: this.get('quantity') ? this.get('quantity') : '',
        notes: this.get('notes') ? this.get('notes') : '',
        category: this.get('category'),
      };
      this.set('newItem', false);
      this.sendAction('save', params);
    }
  },
});
