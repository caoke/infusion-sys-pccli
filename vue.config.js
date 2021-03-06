'use strict'
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'production',
  devServer: {
    port: 8080, // 端口
    proxy: {
      '/': {
        target: 'http://120.24.54.8',
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  },
  // configureWebpack: config => {
  //   // console.log(config)
  //   config.plugins.forEach((val) => {
  //     if (val instanceof HtmlWebpackPlugin) {
  //       val.options.title = '输液系统'
  //     }
  //   })
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src'),
        'views': resolve('src/views')
      },
      mainFiles: ['index'],
      extensions: ['.js', '.vue']
    }
    // externals: { // 使用cdn的方式引入第三方库
    //   'vue': 'Vue',
    //   'element-ui': 'ELEMENT',
    //   'axios': 'Axios'
    // }
  }
}

