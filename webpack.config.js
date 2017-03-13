var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: "./src/app.jsx"
	},
	output: {
		filename:"build/scripts/bundle.js",
    sourceMapFilename: "build/bundle.map"
	},
  devtool: '#source-map',
	plugins: [
 		//new webpack.optimize.UglifyJsPlugin({minimize: true}),
 		new ExtractTextPlugin('build/css/styles.css')
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
		    test: /\.(ttf|eot|svg|png|jpg|gif)$/,
				loader: "file-loader?name=build/images/[hash].[ext]"
		  }
		]
	}
}
