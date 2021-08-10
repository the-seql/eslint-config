module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [require.resolve("./base"), "plugin:node/recommended-module"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  }
};
