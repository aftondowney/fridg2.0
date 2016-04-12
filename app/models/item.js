import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  quantity: DS.attr(),
  notes: DS.attr(),
  date: DS.attr(),
  category: DS.attr()
});
