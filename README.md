# SEQL eslint-config

ESLint configs for SEQL

Learn more about sharable ESLint configs [in the docs](https://eslint.org/docs/developer-guide/shareable-configs).

## Configurations

There are currently `/base`, `/node`, `/mobile`, and `/web` configurations.

We use [eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) to deal with some funkiness around eslint and npm's handling of peerDeps.

Please be sure to add this to the top of your `.eslintrc.js`:

```js
require("@seql/eslint-config/eslint-patch");

module.exports = { ... }; // Your config
```

## Contributing

Rules are updated regularly. To suggest the addition, modification, or removal of a rule, [do so in ClickUp](https://seql.clickup.com/10512200/v/dc/a0tu8-2401/a0tu8-707).
