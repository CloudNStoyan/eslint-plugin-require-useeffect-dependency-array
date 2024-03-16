# `eslint-plugin-require-useeffect-dependency-array`

This ESLint plugin enforces React useEffect to have a dependency array.

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
| require-dependency-array                             | Enforce that a useEffect has a dependency array                        | ✅  | 🔧  |     |

### `require-dependency-array`

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
