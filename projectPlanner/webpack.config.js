const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'App.js'),
	output: {
		path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
		filename: '[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{ useBuiltIns: 'usage', corejs: { version: 3 } },
							],
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: path.resolve(__dirname, 'dist', 'index.html'),
		}),
	],
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		open: true,
	},
	devtool: 'inline-source-map',
};
