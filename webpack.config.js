const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); //here!
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./index.ts",
    mode: isProduction ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },

    devtool: isProduction ? "hidden-source-map" : "source-map",

    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "bundle.js",
    },
    plugins: [
        // And here!
        new CopyPlugin({
            patterns: [{ from: "assets", to: "static" }],
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
