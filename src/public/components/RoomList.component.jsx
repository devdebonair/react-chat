var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var Paper = mui.Paper;

var outer = {
	height: '100%',
	overflowX: 'hidden',
	overflowY: 'scroll',
	minWidth: '100%',
	minHeight: '100%',
	borderRight: 'solid #EBF1E1 thin'
};

var root_style = {
	minWidth: '100%',
	height: '82px'
};

var room_style = {
	padding: '5px 0px 5px 15px',
	lineHeight: '0px'
};

var preview_text = {
	fontSize: '13px',
	color: 'grey'
}

var container_img = {
	padding: '10px'
}

var display_img = {
	borderRadius: '50%'
}

var RoomList = React.createClass({
	render: function()
	{	
		var list = this.props.rooms.map(function(element, i){
			var url = "http://api.adorable.io/avatars/60/"+ i +".png";
			return (
				<Paper key={i} style={root_style} >
					<div className="row">
						<div className="col-lg-2">
							<div style={container_img} >
								<img style={display_img} src={url} />
							</div>
						</div>
						<div className="col-lg-10" style={room_style}>
							<h4>{element.roomName}</h4>
							<span style={preview_text}>{element.messages[element.messages.length-1]}</span>
						</div>
					</div>
				</Paper>
			);
		});

		return (
			<section style={outer} >{list}</section>
		);
	}
});

module.exports = RoomList;