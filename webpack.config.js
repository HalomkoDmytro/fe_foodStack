const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

    const isProd = env.buildType === 'production';

    const getStyleLoader = () => {
        return [
            isProd ?  MinCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };

    const getPlugins = () => {
        const plugins = [
            new CopyWebpackPlugin({
              patterns: [
                { from: 'public/bootstrap.min.css', to: 'bootstrap.min.css' }
              ]
            }),
            new HtmlWebpackPlugin({
              template: './public/index.html',
              inject: 'body',
            }),
            new webpack.DefinePlugin({
                  "process.env.ENV_NAME": JSON.stringify(env.buildType),
            })
        ];

        if(isProd) {
            plugins.push(new MinCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }))
        }

        return plugins;
    }

    return {
        mode: isProd ? 'production' : 'development',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProd ? 'main-[hash:8].js' : 'bundle.[contenthash].js',
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
                    use: getStyleLoader()
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

        plugins: getPlugins(),

        devServer: {
            open: true,
            historyApiFallback: true,
        }
    }
}