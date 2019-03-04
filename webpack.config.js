const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    devServer: {
        overlay: true,
        filename: 'main.js',
        contentBase: path.join(__dirname, 'dist')
    },
        module: {
            rules: [
                {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: "babel-loader",
            },
                {
                    test: /\.html$/,
                    use: {
                        loader: "html-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                            }
                        },
                        "css-loader"
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: './dist/style.css',
            }),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "/index.html"
            })
        ],
    };
