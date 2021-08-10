module.exports = {
  env: {
    "react-native/react-native": true,
  },
  extends: [
    require.resolve("./base"),
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
  ],
  overrides: [
    {
      env: {
        "detox/detox": true,
        "jest": true,
        "jest/globals": true,
      },
      files: ["*.e2e.js"],
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["detox", "react", "react-native"],
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
