Template.bullshitometer1.helpers({
    averageNote1: function() {
        var $parentdiv = $('#participant1');
        var participantActif = Participants.find({participant: "1"}).fetch();
        var averageNote = _.pluck(participantActif, 'averageNote');
        averageNote = Math.round(averageNote*100)/100;
        return averageNote;
    },
    voteNumber: function() {
        var voteNumber = Notes.find({participant: "1"}).count();
        return voteNumber;
    }
})

Template.bullshitometer2.helpers({
    averageNote2: function() {
        var $parentdiv = $('#participant2');
        var participantActif = Participants.find({participant: "2"}).fetch();
        var averageNote = _.pluck(participantActif, 'averageNote');
        averageNote = Math.round(averageNote*100)/100;
        return averageNote;
    },
    voteNumber: function() {
        var voteNumber = Notes.find({participant: "2"}).count();
        return voteNumber;
    }
})

Template.bullshitometer3.helpers({
    averageNote3: function() {
        var $parentdiv = $('#participant3');
        var participantActif = Participants.find({participant: "3"}).fetch();
        var averageNote = _.pluck(participantActif, 'averageNote');
        averageNote = Math.round(averageNote*100)/100;
        return averageNote;
    },
    voteNumber: function() {
        var voteNumber = Notes.find({participant: "3"}).count();
        return voteNumber;
    }
})

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
        console.log('update participant average note');
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
        console.log('update participant average note');
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
        console.log('update participant average note');
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
        var $idParticipant = $parentDiv.attr('id');

        Notes.insert({
            participant: $idParticipant,
            note: 75,
            date: new Date()
        })

        var notes = Notes.find({participant: $idParticipant},{note:1,_id:0}).fetch();
        var notesArray = _.pluck(notes,'note');
        var average = notesArray.avg();
        console.log('moyenne du participant N°'+$idParticipant+' = '+average);

        var selectedParticipant = Participants.findOne({participant: $idParticipant})._id;
        //update the average note of the participant in the participants collection
        console.log('update participant average note');
        Participants.update(
            {_id: selectedParticipant},
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
        console.log('update participant average note');
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

