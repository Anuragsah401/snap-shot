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

    quotes: ["off", "double", { allowTemplateLiterals: true }, { avoidEscape: true }],
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
