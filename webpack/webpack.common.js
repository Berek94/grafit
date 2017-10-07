const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/app.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].bundle.js'
	},
	resolve : {
		alias: {
			src: path.resolve(__dirname, '../src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env'],
						plugins: [
							require('babel-plugin-transform-object-rest-spread'),
							require('babel-plugin-transform-class-properties')
						]
					}
				}
			},
			{
				test: /\.(svg|jpg|jpeg)$/,
				use: ['file-loader']
			},
			{
				test: /\.ttf$/,
				loader: 'url-loader',
				options: {
					limit: 10240,
					mimetype: 'application/x-font-ttf'
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project',
			minify: {
				collapseWhitespace: true
			},
			template: path.resolve(__dirname, '../src/index.html')
		})
	]
}