# `eslint-plugin-require-useeffect-dependency-array`
[![npm](https://img.shields.io/npm/v/eslint-plugin-require-useeffect-dependency-array)](https://www.npmjs.com/package/eslint-plugin-require-useeffect-dependency-array)
[![Github License](https://img.shields.io/github/license/CloudNStoyan/eslint-plugin-require-useeffect-dependency-array)](https://github.com/CloudNStoyan/eslint-plugin-require-useeffect-dependency-array/blob/main/LICENSE)


This ESLint plugin enforces that React useEffect has a dependency array.

## Installation

Assuming you already have ESLint installed, run:

```sh
# npm
npm install eslint-plugin-require-useeffect-dependency-array --save-dev

# yarn
yarn add eslint-plugin-require-useeffect-dependency-array --dev
```

Then extend the recommended eslint config:

```js
{
  "extends": [
    // ...
    "plugin:require-useeffect-dependency-array/recommended"
  ]
}
```

## Rules

✅ Set in the `recommended` configuration\
🔧 Automatically fixable by the [`--fix`](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix) CLI option

| Rule                                                                                                                                                | Description                                                        | ✅  | 🔧  |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | :-: | :-: |
| require-useeffect-dependency-array                             | Enforce that useEffect has a dependency array                        | ✅  | 🔧  |     |

### `require-useeffect-dependency-array`

Examples of incorrect code for this rule:
```js
useEffect(() => {})
```

Examples of correct code for this rule:
```js
useEffect(() => {}, [])
```

## License

MIT
