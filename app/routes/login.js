import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      var controller = this.get('controller');
      var email = controller.get('userEmail');
      var password = controller.get('userPassword');
        this.get('session').open('firebase', {
             provider: 'password',
             email: email,
             password: password
        }).then(function() {
            this.transitionTo('pantry');
        }.bind(this));
    }
  }
});
