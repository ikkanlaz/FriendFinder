var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: [
                parseInt(req.body.q1),
                parseInt(req.body.q2),
                parseInt(req.body.q3),
                parseInt(req.body.q4),
                parseInt(req.body.q5),
                parseInt(req.body.q6),
                parseInt(req.body.q7),
                parseInt(req.body.q8),
                parseInt(req.body.q9),
                parseInt(req.body.q10)
            ]
        }

        var match;
        var matchDifference = 1000;

        friendData.forEach(function(friend){
            console.log("Friend: " + JSON.stringify(friend));
            var difference = 0;
            for(var i = 0; i<friend.scores.length; i++){
                difference += Math.abs(friend.scores[i]-newFriend.scores[i]);
                console.log("Running total: " + difference);
            }
            console.log("Difference: "+ difference);
            if(difference < matchDifference){
                match = friend;
                console.log("new match: " + JSON.stringify(match));
                matchDifference = difference;
            }
        });

        friendData.push(newFriend);
        res.json(match);
    });
};