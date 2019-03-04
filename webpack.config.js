const path = require('path');
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
        contentBase: path.join(__dirname, 'dist'),
        port: 9090

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
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "./[name].css",
            }),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ],
    };
