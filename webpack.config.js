const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const SourceMapDevToolPlugin = require("webpack/lib/SourceMapDevToolPlugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['css-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
<<<<<<< HEAD
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         // Creates `styles` nodes from JS strings
            //         "styles-loader",
            //         // Translates CSS into CommonJS
            //         "css-loader",
            //         // Compiles Sass to CSS
            //         "sass-loader",
            //     ],
            // },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
=======
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
>>>>>>> 4012be100b43a34ad40171e2feb6558ac6260be0
            }
        ]
    }
}