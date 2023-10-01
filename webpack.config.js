import { resolve as _resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const isProduction = process.env.NODE_ENV === "production";

export const entry = "./index.ts";
export const mode = isProduction ? "production" : "development";
export const module = {
    rules: [
        {
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: [loader, "css-loader"],
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
};
export const resolve = {
    extensions: [".ts", ".js"],
};
export const optimization = {
    minimizer: ["...", new CssMinimizerPlugin()],
};
export const devtool = isProduction ? "hidden-source-map" : "source-map";
export const output = {
    path: _resolve(__dirname, "dist"),
    clean: true,
    filename: "bundle.js",
};
export const plugins = [
    new CopyPlugin({
        patterns: [{ from: "assets", to: "assets" }],
    }),
    new HtmlWebpackPlugin({
        template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
];
