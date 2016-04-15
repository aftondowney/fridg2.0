import Ember from 'ember';
import moment from 'moment';

export function dateColor(params/*, hash*/) {
  var type = params[0].get('type');
  var now = moment().format('DD MMMM YYYY, hh:mm a');
  var warnMeat = params[0].get('warnMeat');
  var expDate = params[0].get('exp');
  var expWeek = params[0].get('expWeek');
  var expTwoWeeks = params[0].get('expTwoWeeks');


if(type === 'produce') {
  if (moment(now).isAfter(expWeek)) {
    return Ember.String.htmlSafe('<h3><font color="#990000">SEVEN DAYS OLD</h3>');
  } else if (moment(now).isAfter(expDate)) {
    return Ember.String.htmlSafe('<h3><font color=#ff9900">THREE DAYS OLD</h3>');
  }
} else if(type === 'meat') {
  if(moment(now).isAfter(expDate)) {
    return Ember.String.htmlSafe('<h3><font color="#990000">THREE DAYS OLD</h3>');
  } else if(moment(now).isAfter(warnMeat)) {
    return Ember.String.htmlSafe('<h3><font color=#ff9900"> ONE DAY OLD</h3>');
  }
} else if(type === 'dairy') {
  if(moment(now).isAfter(expTwoWeeks)) {
    return Ember.String.htmlSafe('<h3><font color="#990000">TWO WEEKS OLD</h3>');
  } else if(moment(now).isAfter(expWeek)) {
    return Ember.String.htmlSafe('<h3><font color=#ff9900">ONE WEEK OLD</h3>');
  }
} else {
  return Ember.String.htmlSafe('');
}
}
export default Ember.Helper.helper(dateColor);
