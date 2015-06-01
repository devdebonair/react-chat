var Pusher = require('pusher');
var APP_ID = '120076';
var APP_KEY = '4213d3078d641f4d1b78';
var APP_SECRET = 'acf43f72c7544eb63a17';

var Concierge = function()
{
	this.pusher = new Pusher({
		appId: APP_ID,
		key: APP_KEY,
		secret: APP_SECRET
	});
};

Concierge.prototype = {
	sendMessage: function(roomId, message)
	{
		var data = {
			message: message,
			timestamp: new Date().getTime()
		};
		this.pusher.trigger(roomId, 'send', data);
	}
};

module.exports = Concierge;