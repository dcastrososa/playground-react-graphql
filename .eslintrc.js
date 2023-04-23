module.exports = {
  extends: ["airbnb-typescript", "plugin:react-hooks/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "max-len": ["error", { code: 232 }],
    "@typescript-eslint/naming-convention": "off",
    "import/named": "off",
    "no-underscore-dangle": "off",
    "react/require-default-props": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
};
