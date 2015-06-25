import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addUser: function() {
      var newUser = this.store.createRecord('user', {
        name: this.get('name')
      });
      newUser.save();
    }
  }
});
