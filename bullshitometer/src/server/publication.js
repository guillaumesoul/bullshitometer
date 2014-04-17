Meteor.publish('allDebates', function() {
    return Debates.find();
});