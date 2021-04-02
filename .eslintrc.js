export const env = {
  browser: true,
  es2021: true,
  node: true,
};
export const extends = ["airbnb-base", "plugin:prettier/recommended"];
export const parserOptions = {
  ecmaVersion: 12,
  sourceType: "module",
};
export const rules = {
  "prettier/prettier": "off",
  "no-console": "off",
  "spaced-comment": "off",
  "no-else-return": "off",
};
