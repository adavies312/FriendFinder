var friends = require('../data/friends.js');

module.exports = function (app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends'), function(req, res){
        //make post route work
        //add up scores for each person
        // a for loop for friends
        // get user data 
        // variable for difference in scores
        // Determine the best match using difference
        var difference = 0;
        for (var i=0; i< friends.length; i++){
            console.log(friends[i].name);

            for (var j=0; j<friends[i].score[j]; j++){
                difference += Math.abs(parseInt(score[j]) - parseInt(friends[i].score[j]))
                console.log(difference + "Loop being hit");
            }
        }

    }

}