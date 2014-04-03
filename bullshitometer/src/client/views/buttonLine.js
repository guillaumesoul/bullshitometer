Template.buttonLine.events({
    'click button.red': function(e) {
        e.preventDefault();
        console.log('click button bullshit');
    },
    'click button.orange': function(e) {
        e.preventDefault();
        console.log('click button don\'t agree');
    },
    'click button.yellow': function(e) {
        e.preventDefault();
        console.log('click button more or less');
    },
    'click button.light-green': function(e) {
        e.preventDefault();
        console.log('click button quite agree');
    },
    'click button.green': function(e) {
        e.preventDefault();
        console.log('click button damn right');
    }
});