const requireDependencyArrayRule = require("./require-dependency-array.js");

/** @type {import('eslint').ESLint.Plugin} */
module.exports = {
  configs: {
    recommended: {
      plugins: ["require-useeffect-dependency-array"],
      rules: {
        "require-useeffect-dependency-array/require-dependency-array": "error",
      },
    },
  },
  rules: {
    "require-dependency-array": requireDependencyArrayRule,
  },
};
