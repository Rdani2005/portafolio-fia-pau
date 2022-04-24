const path = require('path');

const { merge } = require("webpack-merge");
const common = require('./webpack.common');

const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { SourceMap } = require('module');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",

    module: {
        rules: [
            {
                use: ["style-loader","css-loader","sass-loader"],
                test: /.(css|sass|scss)$/
            },
        ]
    },

    devServer: {
        port: 3000,
        //contentBase: "../dist",
        static: {
            directory: path.join(__dirname, '../dist')
        },
        hot: true,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],

    target: "web",
    devtool: "eval-source-map"
}

module.exports = merge(
    common,
    devConfig
)