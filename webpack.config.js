const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {

    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[hash:12].[ext]",
                            outputPath: "assets"
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                            gifsicle: {
                                optimizationLevel: 7,
                                interlaced: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        disableHostCheck: true
    },
    plugins: [htmlPlugin]
}