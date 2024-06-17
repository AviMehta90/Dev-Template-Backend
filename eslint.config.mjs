import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ["src/**/*.{js,jsx,ts,tsx}"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
