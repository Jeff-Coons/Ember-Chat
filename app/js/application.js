window.Crack = Ember.Application.create();

Crack.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://crack.firebaseio.com/rooms/")
});

Crack.CrackerAdapter = Crack.ApplicationAdapter.extend({
  pathForType: function(type) {
    return "general";
  }
});
