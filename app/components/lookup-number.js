import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    numberLookup() {
      var params = {
        number: this.get('number')
      };
      this.sendAction('numberLookup', params);
    }
  }
});
