//NODE DEPENDENCIES (for webpack)
const Path = require('path');
//BUILD DEPENDENCIES
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: Path.resolve(__dirname, 'dist'),
		filename: './app-bundle.js'
	},
	plugins: 
	[
		//wipe out current dist
		new CleanWebpackPlugin(['dist']),
		//enable html copy/parse
    	new HtmlWebpackPlugin({
    		title: "2D WebGL Stuff"
    	})
	]
};