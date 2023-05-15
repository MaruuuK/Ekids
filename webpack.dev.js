const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: './dist'
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader' },
                ]
            },
        ],
    },
})