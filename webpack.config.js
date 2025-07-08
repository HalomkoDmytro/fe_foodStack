const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

    const isProd = env.buildType === 'production';

    const getStyleLoader = () => {
        return [
            isProd ?  MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };

    const getPlugins = () => {
        const plugins = [
            new CopyWebpackPlugin({
              patterns: [
                { from: 'public/bootstrap.min.css', to: 'bootstrap.min.css' },
                { from: 'public/_redirects', to: '' }
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
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }))
        }

        return plugins;
    }

    return {
        mode: isProd ? 'production' : 'development',

        performance: {
            maxEntrypointSize: 400000, // 400KB
            maxAssetSize: 1000000,     // 1MB for images
            hints: 'warning'
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProd ? 'main-[contenthash:8].js' : 'bundle.[contenthash].js',
            clean: true
        },

        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    common: {
                        minChunks: 2,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },

        module: {
            rules: [
                // Loading js
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
                                filename: 'images/[name]-[hash:7][ext]'
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
                                 filename: 'fonts/[name][ext]'
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
            hot: true, // Enable hot module replacement
            port: 3000,
        }

    }
}