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
        this.transitionTo('grocery');
      }.bind(this));
    },
    logout: function() {
      this.get('session').close().then(function() {
        this.transitionTo('application');
      }.bind(this));
    },
    toggleGrocery(){
      var newClass = document.getElementById('jumboBackground');
      newClass.className="jumbotron grocerytron";
    },
    togglePantry(){
      var newClass = document.getElementById('jumboBackground');
      newClass.className="jumbotron pantrytron";
    },
    toggleHome(){
      var newClass = document.getElementById('jumboBackground');
      newClass.className="jumbotron";
    },
  }
});
