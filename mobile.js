module.exports = {
  env: {
    "react-native/react-native": true,
  },
  extends: [require.resolve("./react"), "plugin:react-native/all"],
  overrides: [
    {
      env: {
        "detox/detox": true,
      },
      files: ["*.e2e.js"],
    },
  ],
  plugins: ["detox"],
  settings: {
    "import/ignore": ["react-native"], // https://github.com/facebook/react-native/issues/28549
  },
};
