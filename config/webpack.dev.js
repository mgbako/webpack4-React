const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: "./src/main.js"
	},
	mode: "development",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		overlay: true,
		hot: true,
		stats: {
			color: true
		}
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{loader: "babel-loader"}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			},
			{
				test: /\.html$/,
				use: [
					/*{
						loader: 'file-loader',
						options: {
							name: "[name].html"
						}
					},
					{
						loader: "extract-loader"
					},*/
					{
						loader: "html-loader",
						options: {
							attrs: ["img:src"]
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "img/[name].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HTMLWebPackPlugin({
			title: "Webpack 4 With Express Server",
			template: "./src/index.html"
		})
	]
}