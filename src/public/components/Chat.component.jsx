var React = require('react');
var Reflux = require('reflux');
var ChatStore = require('../stores/Chat.store.jsx');
var ChatActions = require('../actions/Chat.action.jsx');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var RoomList = require('./RoomList.component.jsx');
var _ = require('underscore');
var Typography = mui.Typography;
var AppBar = mui.AppBar;

var style = {
	height: '100%'
};

var Chat = React.createClass({
	mixins: [Reflux.connect(ChatStore, 'user')],
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function()
	{
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	handleCompose: function()
	{
		console.log('Compose Message.');
	},
	render: function()
	{
		return (
			<section stlye={style}>
				<section className="col-lg-3">
					<div className="row">
						<AppBar title="React Chat" iconClassNameRight="fa fa-lg fa-pencil-square-o" onRightIconButtonTouchTap={this.handleCompose} />
					</div>
					<div className="row" style={style}>
						<RoomList rooms={_.values(this.state.user.rooms)} />
					</div>
				</section>
			</section>
		);
	}
});

module.exports = Chat;