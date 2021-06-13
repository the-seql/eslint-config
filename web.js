module.exports = {
  env: {
    browser: true,
  },
  extends: [
    require.resolve("./base"),
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["babel", "react"],
  rules: {
    "import/order": [
      "error",
      {
        "alphabetize": { order: "asc" },
        "newlines-between": "always",
        "pathGroups": [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
        ],
      },
    ],
    "react/jsx-sort-props": [
      "error",
      { reservedFirst: true, shorthandFirst: true },
    ],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
