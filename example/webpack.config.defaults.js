module.exports = require("@terse/webpack").api()
  .loader("babel", ".js", {
    exclude: /node_modules/,
    query: { cacheDirectory: true },
  })
  .loader("json", ".json")
  .loader("style", ".css")
  .loader("css", ".css", {
    query: { localIdentName: "[name]-[local]--[hash:base64:5]" },
  })
  .loader("url", [".jpg", ".png"], {
    query: { limit: 8192 }, // Inline base64 URLs for <= 8K images
  })
  .modules("./lib")
  .when("development", function(config) {
    return config
      .plugin("npm-install-webpack-plugin")
      .plugin("webpack.HotModuleReplacementPlugin")
    ;
  })
;