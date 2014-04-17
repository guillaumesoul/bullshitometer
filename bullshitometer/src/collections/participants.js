Participants = new Meteor.Collection('participants');

Notes = new Meteor.Collection('notes');

//Fonction retournant la moyenne d'un tableau d'élément
/*Array.prototype.avg = function () {
    var av = 0;
    var cnt = 0;
    var len = this.length;
    for (var i = 0; i < len; i++) {
        var e = +this[i];
        if (!e && this[i] !== 0 && this[i] !== '0') e--;
        if (this[i] == e) {
            av += e;
            cnt++;
        }
    }
    return av / cnt;
};*/

/*Meteor.methods({

});*/
