var friends = require('../data/friends.js');

module.exports = function (app){
    app.get('/api/data/friends', function(req, res){
        res.json(friends);
    })
}