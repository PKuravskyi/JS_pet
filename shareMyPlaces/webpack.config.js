const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	// USE THIS ENTRY STRUCTURE WHEN USING MULTIPLE ENTRIES!!!
	entry: {
		MyPlace: [
			path.resolve(__dirname, 'src', 'MyPlace.js'),
			path.resolve(__dirname, 'src', 'SharePlace.js'),
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
		filename: '[name].js',
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /(node_modules)/,
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
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'my-place', 'my-place.html'),
			filename: path.resolve(__dirname, 'dist', 'my-place', 'index.html'),
		}),
	],
};
