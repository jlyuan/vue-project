/**
 * Created by jlyuan on 2019/3/15.
 */

var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理

module.exports = {

    entry: path.resolve(__dirname, 'src/main.js'), // 项目入口文件

    output: { // 配置输出选项

        path: path.resolve(__dirname, 'dist'), // 配置输出的路径

        filename: 'bundle.js' // 配置输出的文件名
    },
     plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],

    module:{
        rules:[
             { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
             { test: /\.(png|jpg|gif)$/, use: 'url-loader' },//处理css文件的规则
             { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
             { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
             { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径
      "vue$": "vue/dist/vue.js"
    }
  }

};


