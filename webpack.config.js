/*
* @Author: kyy
* @Date:   2016-12-05 17:26:41
* @Last Modified by:   kyy
* @Last Modified time: 2016-12-26 11:42:05
*/

'use strict';

var path = require("path");
var webpack = require("webpack");
var packageData = require("./package.json");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.normalize(__dirname + "/src");
const OUTPUT_PATH = path.normalize(__dirname + "/dist");

//console.log(SRC_PATH, OUTPUT_PATH);

module.exports = function main() {
  let indexFileName = packageData.app.indexFileName + '.js';
  let config = {
    entry: SRC_PATH + '/main.ts'
      /*{
              app: './src/main.ts',//SRC_PATH + '/main.ts', // 入口
              'polyfills': './src/polyfills.ts',
              'vendor': './src/vendor.ts',
            }*/
      ,
    output: {
      filename: indexFileName,//'[name].js',
      path: OUTPUT_PATH,
      //publicPath: "./"
      publicPath: "http://localhost:8080/"
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    module: {
      loaders: [{
        test: /\.ts$/,
        include: [
          SRC_PATH
        ],
        //exclude: /(libs|node_modules)/,
        loaders: [
        'awesome-typescript-loader',
         'angular2-template-loader', // 模板编译
         'angular2-router-loader', // webpack 异步加载模块，当使用loadChildren时需要此加载器
         ]
      }, {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }, {
        test: /\.css$/,
        exclude: ['/src'],
        loader: ExtractTextPlugin.extract("style-loader", "to-string-loader","css-loader?sourceMap")
        //loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'postcss-loader']})
      }, {
        test: /\.css$/,
        include: ['/src'],
        loader: 'raw'
      }]
    },
    "plugins": [new webpack.BannerPlugin('Build at ' + new Date() + '\nBy~雅座前端开发组', {
      "entryOnly": true
        })/*,
        new webpack.optimize.UglifyJsPlugin({ // 压缩代码 js与css
            compress: {
                warnings: false
            },
            mangle : {
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
    })*/,
     new HtmlWebpackPlugin({
      template: 'src/index.html', // 模板html路径
      chunksSortMode: 'dependency',
      /*minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      }*/
    }),
    new ExtractTextPlugin('style.css')
    ],
    "debug": true,
    "devtool": "source-map"
  };
  return config;
}();