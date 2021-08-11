module.exports = {
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
  },
  plugins: ["babel"],
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
        "pathGroupsExcludedImportTypes": ["react"],
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
