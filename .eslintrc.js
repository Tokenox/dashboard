module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["react", "simple-import-sort"],
  env: {
    node: true,
    browser: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@next/next/no-img-element": "off",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
