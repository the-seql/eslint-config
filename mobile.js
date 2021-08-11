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
};
