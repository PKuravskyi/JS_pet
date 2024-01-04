const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'projectPlanner', 'App.js'),
	output: {
		path: path.resolve(__dirname, 'projectPlanner', 'assets', 'scripts'),
		filename: 'App.js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'projectPlanner', 'index.html'),
		}),
	],
	devServer: {
		static: path.resolve(__dirname, 'projectPlanner'),
		open: true,
	},
	devtool: 'inline-source-map',
};
