const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = function lessLoader({
  getStyleLoaders,
  isEnvProduction,
  shouldUseSourceMap,
  isEnvDevelopment,
  getCSSModuleLocalIdent,
}) {
  return [
    {
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 3,
          sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
        },
        "less-loader"
      ),
      sideEffects: true,
    },
    {
      test: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 3,
          sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          },
        },
        "less-loader"
      ),
    },
  ];
};
