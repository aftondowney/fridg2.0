import Ember from 'ember';
import moment from 'moment';

export function dateColor(/*, hash*/) {
var b = moment().add(3, 'days');
var c = moment().add(1, 'weeks');

  if (b) {
return Ember.String.htmlSafe('<h1>I want this to change the date color to yellow. This will not work because "3 days" is too specific, and there is no way to keep the color the same after that time has passed. It will only change for one day.</h1>');
  } else if (c) {
return Ember.String.htmlSafe('<h1>I want this to change the date color to red.</h1>');
}
}

export default Ember.Helper.helper(dateColor);
