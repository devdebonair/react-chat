var Reflux = require('reflux');
var ChatActions = require('../actions/Chat.action.jsx');
var Concierge = require('../js/concierge');
var _ = require('underscore');

var concierge = new Concierge();

var ChatStore = Reflux.createStore({
	listenables: [ChatActions],
	user: {
		rooms: {},
		username: '',
		activeRooms: []
	},
	getInitialState: function()
	{
		return this.user;
	},
	onSendMessage: function(roomId, message)
	{
		concierge.sendMessage(roomId, message);
	},
	onCreateRoom: function(roomName, users)
	{
		if(users.constuctor !== Array || !users)
		{
			users = [this.user.username];
		}
		var room = {
			users: users,
			messages: [],
			roomName: users.join(',')
		};
		$.get('/room/create', function(data){
			this.user.rooms[uuid] = data.uuid;
			self.trigger(this.user);
		});
	},
	onOpenRoom: function(roomId)
	{
		if(!this.user.rooms[roomId] && this.user.activeRooms.indexOf(roomId) > -1)
		{
			return;
		}
		this.user.activeRooms.push(roomId);
		concierge.receiveMessage(roomId, function(data){
			this.user.rooms[data.roomId].messages.push(data.message);
		});
		this.trigger(this.user);
	},
	onCloseRoom: function(roomId)
	{
		var index = this.user.activeRooms.indexOf(roomId);
		if(index < 0)
		{
			return;
		}
		this.user.activeRooms.splice(index, index);
		this.trigger(this.user);
	},
	onDeleteRoom: function(roomId)
	{
		rooms = _.omit(this.user.rooms, roomId);
		this.user.rooms = rooms;
		this.trigger(this.user);
	}
});

module.exports = ChatStore;