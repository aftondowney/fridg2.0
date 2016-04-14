import Ember from 'ember';
import moment from 'moment';

export function dateColor(params/*, hash*/) {
  var type = params[0].get('type');
  var date = params[0].get('date');
  var now = moment().format('DD MMMM YYYY, hh:mm a');
  var warnMeat = params[0].get('warnMeat');
  var expDate = params[0].get('exp');
  var expWeek = params[0].get('expWeek');
  var expTwoWeeks = params[0].get('expTwoWeeks');


if(type === 'produce') {
  if (moment(now).isAfter(expWeek)) {
    return Ember.String.htmlSafe('<h1><font color="red">SEVEN DAYS OLD</h1>');
  } else if (moment(now).isAfter(expDate)) {
    return Ember.String.htmlSafe('<h1><font color="yellow">THREE DAYS OLD</h1>');
  }
} else if(type === 'meat') {
  if(moment(now).isAfter(expDate)) {
    return Ember.String.htmlSafe('<h1><font color="red">THREE DAYS OLD</h1>');
  } else if(moment(now).isAfter(warnMeat)) {
    return Ember.String.htmlSafe('<h1><font color="yellow"> ONE DAY OLD</h1>');
  }
} else if(type === 'dairy') {
  if(moment(now).isAfter(expTwoWeeks)) {
    return Ember.String.htmlSafe('<h1><font color="red">TWO WEEKS OLD</h1>');
  } else if(moment(now).isAfter(expWeek)) {
    return Ember.String.htmlSafe('<h1><font color="yellow">ONE WEEK OLD</h1>');
  }
} else {
  return Ember.String.htmlSafe('');
}
}
export default Ember.Helper.helper(dateColor);
