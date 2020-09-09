const HtmlWebpackPlugin = require('html-webpack-plugin')

var config={
    mode: 'development', // development  or  production
    entry:{
        webindex:"./src/app" //入口文件
    },
    output:{//输出
        filename:"[name].js", //文件名
        path: __dirname+"/dist" //路径 dist为webpack编译后代码生成目录
    },
    module: { //babel与react的jsx融合
        rules: [
            {test: /\.js|jsx$/, exclude: /node_modules/, loader: "babel-loader"},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ["webindex"]
        })
    ],
    node: { fs: 'empty' } // 解决er: cornerstoneWADOImageLoader.min.js Module not found: Error: Can't resolve 'fs'
}

module.exports=config; //导出配置， 使webpack读取