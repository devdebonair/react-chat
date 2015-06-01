var React = require('react');
var App = require('./components/Chat.component.jsx');
var TapEvent = require('react-tap-event-plugin');

TapEvent();

React.render(<App />, document.querySelector('#app'));