let path = require('path');

module.exports = {
	entry: './dev/js/App.js',
	output: {
		path: path.resolve(__dirname, './resource-bundles/AccountManagement.resource/js'),
		filename: 'app.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	}
};