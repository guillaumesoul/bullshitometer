Template.buttonLine.events({
    'click button.red': function(e) {
        e.preventDefault();
        //get the div element containing the button
        var $parentDiv = $(e.target).parent().parent();
        var $idParentDiv = $parentDiv.attr('id');

        Notes.insert({
            participant: $idParentDiv,
            note: 0,
            date: new Date()
        })

        var notes = Notes.find({participant: $idParentDiv},{note:1,_id:0}).fetch();
        var notesArray = _.pluck(notes,'note');
        var average = notesArray.avg();
        console.log('moyenne du participant N°'+$idParentDiv+' = '+average);
    },

    'click button.orange': function(e) {
        e.preventDefault();
        var $parentDiv = $(e.target).parent().parent();
        var $idParentDiv = $parentDiv.attr('id');

        Notes.insert({
            participant: $idParentDiv,
            note: 25,
            date: new Date()
        })

        var notes = Notes.find({participant: $idParentDiv},{note:1,_id:0}).fetch();
        var notesArray = _.pluck(notes,'note');
        var average = notesArray.avg();
        console.log('moyenne du participant N°'+$idParentDiv+' = '+average);
    },

    'click button.yellow': function(e) {
        e.preventDefault();
        var $parentDiv = $(e.target).parent().parent();
        var $idParentDiv = $parentDiv.attr('id');

        Notes.insert({
            participant: $idParentDiv,
            note: 50,
            date: new Date()
        })

        var notes = Notes.find({participant: $idParentDiv},{note:1,_id:0}).fetch();
        var notesArray = _.pluck(notes,'note');
        var average = notesArray.avg();
        console.log('moyenne du participant N°'+$idParentDiv+' = '+average);
    },

    'click button.light-green': function(e) {
        e.preventDefault();
        var $parentDiv = $(e.target).parent().parent();
        var $idParentDiv = $parentDiv.attr('id');

        Notes.insert({
            participant: $idParentDiv,
            note: 75,
            date: new Date()
        })

        var notes = Notes.find({participant: $idParentDiv},{note:1,_id:0}).fetch();
        var notesArray = _.pluck(notes,'note');
        var average = notesArray.avg();
        console.log('moyenne du participant N°'+$idParentDiv+' = '+average);
    },

    'click button.green': function(e) {
        e.preventDefault();
        var $parentDiv = $(e.target).parent().parent();
        var $idParentDiv = $parentDiv.attr('id');

        Notes.insert({
            participant: $idParentDiv,
            note: 100,
            date: new Date()
        })

        var notes = Notes.find({participant: $idParentDiv},{note:1,_id:0}).fetch();
        var notesArray = _.pluck(notes,'note');
        var average = notesArray.avg();
        console.log('moyenne du participant N°'+$idParentDiv+' = '+average);
    }
});



/*Template.bullshitometer.events({
    //update the average note of the participant
    'click button.update': function() {
        console.log('Button update clicked');
        //récupère les notes pour le participant1
        var notes = Notes.find({participant: "1"},{note:1,_id:0}).fetch();
        //transform un tableau d'objet en tableau d'élément avec l'attribut 'note'
        var notesArray = _.pluck(notes,'note');
        console.log(notesArray);
        var average = notesArray.avg();
        console.log(average);

    }
});*/

