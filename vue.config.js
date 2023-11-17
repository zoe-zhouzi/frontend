const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  //配置跨域代理
  devServer: {
    proxy: {
      "/api" : {
        target: "http://localhost:8080",
        pathRewrite: {'^/api':''}
      },
    }
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
})
