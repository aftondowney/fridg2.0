import Ember from 'ember';
import moment from 'moment';

export function dateColor(params/*, hash*/) {
  var date = params[0].get('date');
  var now = moment().format('DD MMMM YYYY, hh:mm a');
  var expDate = params[0].get('exp');
  var expWeek = params[0].get('expWeek');
  console.log('date', date);
  console.log('now', parseInt(now));
  console.log('expDate', parseInt(expDate));
  console.log('expWeek', parseInt(expWeek));

  if (moment(date).isAfter(expWeek)) {
    return Ember.String.htmlSafe('<h1><font color="red">SEVEN DAYS OLD</h1>');
  } else if (moment(now).isAfter(expDate)) {
    return Ember.String.htmlSafe('<h1><font color="yellow">THREE DAYS OLD</h1>');
  }
}

export default Ember.Helper.helper(dateColor);
