const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'null',  //设置为Null大大压缩代码

    entry: __dirname + '/app/main.js',   //入口文件
    output: {
        path: __dirname + '/public',  //打包后的文件
        filename: 'bundle-[hash].js'  //打包后输出的文件名
    },

    devServer: {
        contentBase: './public',  //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true  //实时刷新
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader",
                        options: {
                            modules: true,  //指定启用CSS Modules
                            localIdentName: "[name]_[local]--[hash:base64:6]" //指定css的类名格式
                        }
                    },{
                        loader: "postcss-loader"
                    }
                ],
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname+'/app/index.template.html',   //模版文件路径
        }),
        new webpack.HotModuleReplacementPlugin(),  //热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin('public/*.*',{
            root:__dirname,
            verbose:true,
            dry:false
        }),
    ],
    optimization: {
        minimize: true
    }
}