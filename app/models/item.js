import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  exp: DS.attr(),
  expWeek: DS.attr(),
  expTwoWeeks: DS.attr(),
  quantity: DS.attr(),
  notes: DS.attr(),
  category: DS.attr(),
  warnMeat: DS.attr(),
  type: DS.attr(),
  user: DS.belongsTo('user', {async: true})
});
