const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "https://sm.ms",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api/v2/",
        headers: {
          referer: "https://sm.ms",
          origin: "https://sm.ms"
        }
      }
    })
  );
};
