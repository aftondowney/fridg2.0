import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:food'});
  this.route('grocery');
  this.route('pantry');
  this.route('all');
  this.route('number', {path: '/results/:number'});
  this.route('item', {path: '/results/:groceryName'});
  this.route('login');
  this.route('signup');
});

export default Router;
