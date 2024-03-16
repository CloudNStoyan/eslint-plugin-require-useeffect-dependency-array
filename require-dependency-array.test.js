"use strict";

const { RuleTester } = require("eslint");
const requireDependencyArrayRule = require("./require-dependency-array.js");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  parserOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "require-dependency-array", // rule name
  requireDependencyArrayRule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: "useEffect(() => {}, [])",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "useEffect(() => {})",
        output: "useEffect(() => {}, [])",
        errors: 1,
      },
    ],
  }
);

console.log("All tests passed!");
