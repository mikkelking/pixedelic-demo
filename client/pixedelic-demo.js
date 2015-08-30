if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  console.log("Starting up");
//  $('#camera_wrap_2').camera();

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      
      $('#camera_wrap_2').camera();
    }
  });
  Template.hello.rendered = function() {
      
      $('#camera_wrap_2').camera({
        height: '400px',
        loader: 'bar',
        pagination: false,
        thumbnails: true
      });
    };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
