import Ember from 'ember';
import moment from 'moment';

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
        exp: this.get('exp'),
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    },
    sendTo(item) {
      var params = {
        date: this.get('date')? this.get('date') : moment().format('DD MMMM YYYY, hh:mm a'),
        exp: this.get('date') ? this.get('date') : moment().add(3,'days').format('DD MMMM YYYY, hh:mm a'),
        expWeek: this.get('date') ? this.get('date') : moment().add(7,'days').format('DD MMMM YYYY, hh:mm a'),
        category: this.get('category')
      };
      this.sendAction('sendTo', item, params);
    },
      }
});
