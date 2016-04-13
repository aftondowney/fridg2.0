import Ember from 'ember';
import moment from 'moment';

export function dateColor(params/*, hash*/) {
  var date = params[0].get('date');
  var now = moment().format('MM D YYYY, hh:mm a');
  var expDate = params[0].get('exp');
  var expWeek = params[0].get('expWeek');
  console.log('date', date);
  console.log('now', now);
  console.log('expDate', expDate);
  console.log('expWeek', expWeek);

  if (now >= expDate) {
    return Ember.String.htmlSafe('<h1>THREE DAYS OLD</h1>');
  } else if (now >= expWeek) {
    return Ember.String.htmlSafe('<h1>SEVEN DAYS OLD</h1>');
  }
}

export default Ember.Helper.helper(dateColor);
