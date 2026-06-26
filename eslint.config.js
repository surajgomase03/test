module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "error"
    }
  }
];