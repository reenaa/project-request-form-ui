const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/cas','/cas_proxy/cas/*'],
    createProxyMiddleware({
      target: 'https://fed.princeton.edu',
      changeOrigin: true,
       pathRewrite: {
        '^/cas_proxy/cas/p3/serviceValidate': '/cas/p3/serviceValidate', 
      },
    })
  );
};
