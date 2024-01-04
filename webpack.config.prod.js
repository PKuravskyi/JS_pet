const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'projectPlanner', 'App.js'),
	output: {
		path: path.resolve(__dirname, 'projectPlanner', 'assets', 'scripts'),
		filename: '[name].[contenthash].js',
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
};
