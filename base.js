module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["jest", "import", "prefer-arrow", "prettier"],
  rules: {
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": ["error", { max: 10 }],
    "dot-notation": "error",
    "eqeqeq": "error",
    "import/no-commonjs": "warn",
    "import/order": [
      "error",
      { "alphabetize": { order: "asc" }, "newlines-between": "always" },
    ],
    "new-cap": "error",
    "no-alert": "error",
    "no-console": "error",
    "no-implicit-coercion": "error",
    "no-nested-ternary": "error",
    "no-param-reassign": "error",
    "no-unsafe-optional-chaining": "error",
    "prefer-arrow-callback": "error",
    "prefer-destructuring": ["error", { array: false, object: true }], // TODO: Evaluate arrays
    // "sort-keys": ["error", "asc", { natural: true }], // prefer ability to place primary key on top
  },
};
