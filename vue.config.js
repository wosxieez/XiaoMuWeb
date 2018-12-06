module.exports = {
  // assetsDir: "displace",
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8080,
    disableHostCheck: true,
    // 设置代理
    proxy: {
      '/xiaomu': {
        target: 'http://hefeixiaomu.com:3000',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/xiaomu': '/'
        }
      }
    }
  }
}
