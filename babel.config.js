module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            assets: "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
        },
      ],
      "react-native-reanimated/plugin", // CAUTION: Reanimated plugin has to be listed last.
    ],
  };
};
