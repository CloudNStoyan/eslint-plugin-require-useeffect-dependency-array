const requireDependencyArrayRule = require("./require-useeffect-dependency-array.js");

/** @type {import('eslint').ESLint.Plugin} */
module.exports = {
  configs: {
    recommended: {
      plugins: ["require-useeffect-dependency-array"],
      rules: {
        "require-useeffect-dependency-array/require-useeffect-dependency-array": "error",
      },
    },
  },
  rules: {
    "require-useeffect-dependency-array": requireDependencyArrayRule,
  },
};
