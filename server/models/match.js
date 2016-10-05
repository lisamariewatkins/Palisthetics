var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = new Schema({
	//userId already in user schema
	matchId: {
		//need to grab other user's id somehow
		type: Number
	},
	swipeDecision: {
		type: Boolean
	}
});

var Match = mongoose.model('Match', matchSchema);

module.exports = Match;