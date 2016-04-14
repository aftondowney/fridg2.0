import Ember from 'ember';

export function moveWhere(params/*, hash*/) {
  var category = params[0].get('category');
  console.log(category);

  if(category === 'grocery') {
    return Ember.String.htmlSafe('<h5>(On Grocery List)</h5>');
  } else if(category === 'pantry') {
    return Ember.String.htmlSafe('<h5>(On Pantry List)</h5>');
  } else if(category === 'all') {
    return Ember.String.htmlSafe('<h5>(Not on List)</h5>');
  }
}

export default Ember.Helper.helper(moveWhere);
