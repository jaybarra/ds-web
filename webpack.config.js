const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require("path");

const outputDir = debug ? "public" : "dist";

module.exports = {
    devtool: debug ? "inline-source-map" : false,
    devServer: {
        historyApiFallback: true
    },
    entry: {
        ds: "./src/js/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, outputDir)
    },
    externals: {
        ds_config: "ds_config"
    },
    module: {
        loaders: [
            /** Babel JS loader */
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env", "stage-0"],
                    plugins: ["react-html-attrs", "transform-decorators-legacy", "transform-class-properties"]
                }
            },
            /** SASS style loader */
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            /** Standard CSS loader */
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            /** Handle images */
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=50000'
            }
        ]
    },
    plugins: debug ? [
        new DashboardPlugin()
    ] : [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourceMap: true, comments: false})
    ]
};