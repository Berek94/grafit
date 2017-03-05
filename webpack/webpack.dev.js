const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		stats:'minimal'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{loader: 'style-loader'},
				{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: true,
						importLoader: 1,
						localIdentName: '[name]__[local]___[hash:base64:5]'
					}
				}]
			}
		]
	}
});