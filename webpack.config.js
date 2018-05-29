//DEPENDENCIES
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: Path.resolve(__dirname, 'dist'),
		filename: './dist/js/app-bundle.js'
	},
	plugins: [
    	new HtmlWebpackPlugin({
    		title: "webgl-2d-effects",
    		filename: '.src/index.html'
    	}) 
  	]
}