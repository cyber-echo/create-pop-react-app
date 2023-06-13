/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  semi: true, // 句尾添加分号
  singleQuote: true, // 使用单引号代替双引号
  quoteProps: "as-needed", // 对象的 key 仅在必要时用引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: "none", // 末尾不需要逗号
  bracketSpacing: true, // 大括号内的首尾需要空格
  jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
  arrowParens: "avoid", // 箭头函数，只有一个参数的时候，无需括号
};

module.exports = config;
