Participants = new Meteor.Collection('participants');

Notes = new Meteor.Collection('notes');

Template.buttonLine.events({
    'click button.red': function(e) {
        e.preventDefault();
        console.log('click button bullshit');

        //get the div element containing the button
        var $parentDiv = $(e.target).parent().parent();
        var $idParentDiv = $parentDiv.attr('id');
        console.log('id du parent : '+$idParentDiv);

        Notes.insert({
            participant: 'participant1',
            note: 0,
            date: new Date()
        })
    },
    'click button.orange': function(e) {
        e.preventDefault();
        console.log('click button don\'t agree');
        Notes.insert({
            participant: 'participant1',
            note: 25,
            date: new Date()
        })
    },
    'click button.yellow': function(e) {
        e.preventDefault();
        console.log('click button more or less');
        Notes.insert({
            participant: 'participant1',
            note: 50,
            date: new Date()
        })
    },
    'click button.light-green': function(e) {
        e.preventDefault();
        console.log('click button quite agree');
        Notes.insert({
            participant: 'participant1',
            note: 75
        })
    },
    'click button.green': function(e) {
        e.preventDefault();
        console.log('click button damn right');
        Notes.insert({
            participant: 'participant1',
            note: 100,
            date: new Date()
        })
    }
});