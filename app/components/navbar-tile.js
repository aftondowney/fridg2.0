import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleGrocery(){
        var newClass = document.getElementById('jumboBackground')
        newClass.className="jumbotron grocerytron";
      },
    togglePantry(){
        var newClass = document.getElementById('jumboBackground')
        newClass.className="jumbotron pantrytron";
      },
    toggleHome(){
        var newClass = document.getElementById('jumboBackground')
        newClass.className="jumbotron";
      },
  }

});
