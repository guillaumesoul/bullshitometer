if (Participants.find().count() === 0) {
    Participants.insert({
        participant: "1",
        averageNote: 0
    });
    Participants.insert({
        participant: "2",
        averageNote: 0
    });
    Participants.insert({
        participant: "3",
        averageNote: 0
    });
}