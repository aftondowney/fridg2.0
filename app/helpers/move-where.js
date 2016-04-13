import Ember from 'ember';

export function moveWhere(params/*, hash*/) {
  var category = params[0].get('category');
  console.log(category);

  if(category === 'grocery') {
    return Ember.String.htmlSafe('<h1>Added to Grocery List</h1>');
  } else if(category === 'pantry') {
    return Ember.String.htmlSafe('<h1>Added to Pantry List</h1>');
  }
}

export default Ember.Helper.helper(moveWhere);
