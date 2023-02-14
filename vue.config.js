module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器（方式一）
  /* devServer: {
    proxy: 'http://localhost:5000'
  }  */
  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/api1':''
        },
        // ws: true, // 用于支持websocket，默认值是true
        // changeOrigin: true // 用于控制请求头中的host的值，默认值是true
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/api2':''
        },
        // ws: true, // 用于支持websocket，默认值是true
        // changeOrigin: true // 用于控制请求头中的host的值，默认值是true
      },
      
    }
  }
}