//NODE DEPENDENCIES (for webpack)
const Path = require('path');
//BUILD DEPENDENCIES
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const HtmlLoader = require('html-loader');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: Path.resolve(__dirname, 'dist'),
		filename: './app-bundle.js',
	},
	plugins:
	[
		//wipe out current dist
		new CleanWebpackPlugin(['dist']),
		//enable html
    	new HtmlWebpackPlugin({
    		title: "DEV - 2D WebGL Stuff",
    		minify: false,
    		template: 'src/index.html'
    	}),
    	new Webpack.NamedModulesPlugin(),
    	new Webpack.HotModuleReplacementPlugin(),
    	// new Webpack.DefinePlugin({
    		
    	// })
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	}
};