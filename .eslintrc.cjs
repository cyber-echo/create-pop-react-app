/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};

module.exports = config;
