module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md/,
          use: "raw-loader",
        },
      ],
    },
  },
};
