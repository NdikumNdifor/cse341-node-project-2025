import globals from 'globals'
import pluginJs from '@eslint/js'

import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  pluginJs.configs.recommended, // ESLint recommended rules
  prettier, // Disable conflicting ESLint rules with Prettier
  pluginPrettier.configs.recommended, // Apply Prettier as an ESLint plugin
  {
    rules: {
      // "semi": ["error", "never"], // Enforce no semicolons
      // "quotes": ["error", "single"], // Enforce single quotes
      // "indent": ["error", 2], // Enforce 2 spaces indentation
      // "max-len": ["error", { "code": 80 }], // Enforce max line length of 80
      // "comma-dangle": ["error", "never"], // Enforce no trailing commas
    }
  }
]

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import prettier from "eslint-config-prettier";
// import pluginPrettier from "eslint-plugin-prettier";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {
//     files: ["**/*.js"],
//     languageOptions: {
//       sourceType: "commonjs", // Use "module" if using import/export
//       globals: { ...globals.browser, ...globals.node },
//     },
//     rules: {
//       // Add your custom ESLint rules here
//       "prettier/prettier": "error", // Enforce Prettier formatting as an ESLint rule
//       "no-unused-vars": "warn", // Example rule: Warn about unused variables
//     },
//   },
//   pluginJs.configs.recommended, // ESLint recommended rules
//   prettier, // Disable conflicting ESLint rules with Prettier
//   pluginPrettier.configs.recommended, // Apply Prettier as an ESLint plugin
// ];
