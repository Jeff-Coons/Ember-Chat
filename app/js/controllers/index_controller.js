Crack.IndexController = Ember.ArrayController.extend({
  needs: ['application'],
  newCrack: '',

  actions: {
    createCrack: function(){
      var username = this.get('controllers.application.username.username');
      var crack = this.store.createRecord('cracker', {
        message: this.get('newCrack'),
        timestamp: new Date(),
        username: username
      });
      crack.save();
      this.set('newCrack', '');
    }
  }
});


Ember.Handlebars.helper('date', function(date) {
  return moment(date).fromNow();
});
