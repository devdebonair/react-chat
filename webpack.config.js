module.exports = {
	context: __dirname + '/src/public',
	entry: './main.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loader: 'jsx-loader' }
		]
	}
};