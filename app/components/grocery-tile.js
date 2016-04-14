import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['type'],
  sortedItems: Ember.computed.sort('item', 'sortBy'),


  actions: {
  update(item, params) {
    this.sendAction('update', item, params);
  },
  sendTo(item, params) {
    this.sendAction('sendTo', item, params);
  },
}
});
