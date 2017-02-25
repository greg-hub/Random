const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		filename: './dist/build.js'
	},
	module: {

		loaders: [
			{
		        test: /\.scss$/,
        		loader: ExtractTextPlugin.extract({
          		fallbackLoader: "style-loader",
          		loader: "css?sourceMap!postcss!sass?sourceMap"
        })
				
			},
			{
	
                test: /\.js$/,
				exclude: /node_modules$/,
                loader: 'babel-loader?presets[]=es2015',
                
            
            },
			{
			test: /\.html$/,
   			loader: "raw-loader"
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('dist/style.css')
		
	],
	watch: true,
	devtool: 'source-map'
};

