module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "react-app",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/react",
    "plugin:import/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import", "prettier"],
  rules: {
    "linebreak-style": 0,
    "no-console": ["warn", { allow: ["warn"] }],
    "react/prop-types": 0,

    //* disables react imports
    "react/react-in-jsx-scope": "off",

    quotes: [
      "off",
      "double",
      { allowTemplateLiterals: true },
      { avoidEscape: true },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],

    //* prettier config
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        singleQuote: false,
        printWidth: 80,
        tabWidth: 2,
        trailingComma: "es5",
      },
    ],

    //* import config
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "Context/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "components/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
      },
    ],

    //* for scss
    // "scss/comment-no-empty": true,
    // "order/properties-alphabetical-order": true,
    // "scss/declaration-nested-properties": "never",
    // "scss/no-duplicate-dollar-variables": true,
    // "scss/no-duplicate-mixins": true,
    // "scss/at-rule-no-unknown": true,
    // "scss/operator-no-unspaced": true,
    // "string-quotes": "double",
    // "no-missing-end-of-source-newline": false,
    // "keyframe-declaration-no-important": true,
    // "unit-allowed-list": ["em", "rem", "%", "ms", "s", "deg", "vh", "vw", "fr"],
    // "block-no-empty": true,
    // "block-opening-brace-space-before": "always",
    // "color-named": "never",
    // "color-no-invalid-hex": true,
    // "length-zero-no-unit": true,
    // "max-nesting-depth": 3,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx"],
      },
    },
    react: {
      version: "latest",
    },
  },
};
