Crack.LoginController = Ember.Controller.extend({
  needs: ['application'],
  username: '',

  actions: {
    logIn: function(){
      this.set('controllers.application.username', {
        username: this.get('username'),
      });
      this.transitionToRoute('index');
    }
  }
});
