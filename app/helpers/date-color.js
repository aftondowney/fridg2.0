import Ember from 'ember';
import moment from 'moment';

export function dateColor(params/*, hash*/) {

  var thisDate = params[0].get('date');
  var expDate = params[0].get('exp');
  console.log(thisDate);
  console.log(expDate);

  if (moment().isAfter(expDate)) {
    return Ember.String.htmlSafe('<h1>I want this to change the date color to yellow. This will not work because "3 days" is too specific, and there is no way to keep the color the same after that time has passed. It will only change for one day.</h1>');
  } else if (moment(thisDate).isAfter(moment(thisDate).add(7, 'days'))) {
    return Ember.String.htmlSafe('<h1>I want this to change the date color to red.</h1>');
  }
}

export default Ember.Helper.helper(dateColor);
