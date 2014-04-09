Template.bullshitometer.helpers({
    averageNote: function() {
        return
        //return 'coucou';
    }
/*    averageNote: function() {
        return ('coucou');
        *//*return Participant.find({slideshowId: this._id});*//*
    }*/
})

Template.buttonLine.events({
    'click button.red': function(e) {
        e.preventDefault();
        //get the div element containing the button
        var $parentDiv = $(e.target).parent().parent();
        var $idParentDiv = $parentDiv.attr('id');
        console.log('id de la div parent : '+$idParentDiv);

        Notes.insert({
            participant: $idParentDiv,
            note: 0,
            date: new Date()
        })
        //get all the notes of the participant
        var notes = Notes.find({participant: $idParentDiv},{note:1,_id:0}).fetch();
        //transform the array of object into an array of element
        var notesArray = _.pluck(notes,'note');
        //calculate the average note with the avg method in participant.js
        var average = notesArray.avg();
        console.log('moyenne du participant N°'+$idParentDiv+' = '+average);
        //Récupération de l'id du participant
        var participantActif = Participants.findOne({participant: $idParentDiv})._id;
        //update the average note of the participant in the participants collection
        console.log('update participant');
        Participants.update(
            {_id: participantActif},
            {$set: {
                averageNote: average
            }
            }
        )
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

        var participantActif = Participants.findOne({participant: $idParentDiv})._id;
        //update the average note of the participant in the participants collection
        console.log('update participant');
        Participants.update(
            {_id: participantActif},
            {$set: {
                averageNote: average
            }
            }
        )
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

        var participantActif = Participants.findOne({participant: $idParentDiv})._id;
        //update the average note of the participant in the participants collection
        console.log('update participant');
        Participants.update(
            {_id: participantActif},
            {$set: {
                averageNote: average
            }
            }
        )
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

        var participantActif = Participants.findOne({participant: $idParentDiv})._id;
        //update the average note of the participant in the participants collection
        console.log('update participant');
        Participants.update(
            {_id: participantActif},
            {$set: {
                averageNote: average
            }
            }
        )
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

        var participantActif = Participants.findOne({participant: $idParentDiv})._id;
        //update the average note of the participant in the participants collection
        console.log('update participant');
        Participants.update(
            {_id: participantActif},
            {$set: {
                averageNote: average
            }
            }
        )
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

