var Pusher = require('pusher-js');

var Concierge = function()
{
	this.pusher = new Pusher('4213d3078d641f4d1b78');
};

Concierge.prototype = {
	sendMessage: function(roomId, message)
	{
		$.post('/send', {roomId: roomId, message: message}, function(){
			console.log('message sent.');
		});
	},
	receiveMessage: function(roomId, cb)
	{
		var room_channel = this.pusher.subscribe(roomId);
		room_channel.bind('send', cb);
	},
	stopReceiving: function(roomId)
	{
		this.pusher.unsubscribe(roomId);
	}
};

module.exports = Concierge;