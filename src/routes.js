var Concierge = require('./Concierge');
var uuid = require('uuid-v4');

module.exports = function(app)
{
	app.get('/', function(req, res){
		res.sendFile(__dirname + '/public/index.html');
	});

	app.get('/room/create', function(req, res){
		var id = uuid();
		res.status(200).json({uuid: id, status: 200});
	});

	app.post('/send', function(req, res){
		var concierge = new Concierge();
		concierge.sendMessage(res.body.roomId, res.body.message);
		res.status(200).json({status: 200});
	});
};