module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    // override/add rules settings here, such as:
    //检查有无使用变量
    "vue/no-unused-vars": "error",
    "vue/comment-directive": "off",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
}
