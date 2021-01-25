const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/group', {
      target: 'http://10.3.69.82:8089',
      changeOrigin: true,
    })
  );
};
