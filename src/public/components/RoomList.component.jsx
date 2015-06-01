var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var Paper = mui.Paper;

var style = {
	minWidth: '100%',
	height: '72px'
};

var RoomList = React.createClass({
	render: function()
	{		
		var list = this.props.rooms.map(function(element, i){
			return (
				<div key={i} className="row">
					<h4>{element.roomName}</h4>
					<span>{element.messages[messages.length-1]}</span>
				</div>
			);
		});

		return (
			<Paper style={style} >{this.props.rooms.length > 0 ? list : 'No rooms.'}</Paper>
		);
	}
});

module.exports = RoomList;