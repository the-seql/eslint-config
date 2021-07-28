module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [require.resolve("./base"), "plugin:node/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules"],
        version: ">=13.0.0",
      }
    ]
  }
};
