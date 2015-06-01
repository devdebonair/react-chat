var Reflux = require('reflux');

var ChatAction = Reflux.createActions([
	'sendMessage',
	'createRoom',
	'deleteRoom',
	'openRoom',
	'closeRoom'
]);

module.exports = ChatAction;