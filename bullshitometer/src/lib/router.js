/*Router.configure({
    layoutTemplate: 'layout'
});*/

Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'home',
        waitOn: function() {
            return  Meteor.subscribe('slideshows'),
                Meteor.subscribe('firstSlides'),
                Meteor.subscribe('remotes');
        }
    });

    this.route('all_debates', {
        path: '/debates/all',
        template: 'allDebateList',
        waitOn: function() {
            return Meteor.subscribe('allDebates');
        }
    });

});

/* CLEAR ERRORS */
/*Router.onBeforeAction(function() {
    clearErrors()
});*/

