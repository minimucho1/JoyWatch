import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(function() {
   GoogleMaps.load();
});

Template.login.events({
  'click #facebook-login' : function(event) {
    Meteor.loginWithFacebook({}, function(err){
      if(err) {
        throw new Meteor.Error("Facebook login failed");
      }
    });
  },

  'click #logout' : function(event) {
    Meteor.logout(function(err){
      if (err) {
        throw new Meteor.Error("Logout failed");
      }
    });
  }
});

Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom:8
      };
    }
  }
});

