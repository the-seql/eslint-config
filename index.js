module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prefer-arrow"],
  rules: {
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": ["error", { max: 10 }],
    "dot-notation": "error",
    "eqeqeq": "error",
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
    "react/jsx-sort-props": [
      "error",
      { reservedFirst: true, shorthandFirst: true },
    ],
    "sort-keys": ["error", "asc", { natural: true }],
  },
};
