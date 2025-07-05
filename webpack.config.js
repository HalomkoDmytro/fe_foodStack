const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        clean: true
    },

    module: {
        rules: [
            // Loading images
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css)$/i,
                use: ['style-loader', 'css-loader']
            },
            // Loading images
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            // Loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
              { from: 'public/bootstrap.min.css', to: 'bootstrap.min.css' }
            ]
          }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body',
        }),
    ],

}