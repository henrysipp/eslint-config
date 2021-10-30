module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: true,
        bracketSpacing: true,
        arrowParens: "always",
        printWidth: 100,
      },
    ],
    camelcase: "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ["error", "never"],
    "react/prop-types": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};
