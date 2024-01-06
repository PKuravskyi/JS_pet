const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'projectPlanner', 'App.js'),
	output: {
		path: path.resolve(__dirname, 'projectPlanner', 'assets', 'scripts'),
		filename: '[contenthash].js',
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
			template: path.resolve(__dirname, 'projectPlanner', 'index.html'),
		}),
	],
	devServer: {
		static: path.resolve(__dirname, 'projectPlanner'),
		open: true,
	},
};
