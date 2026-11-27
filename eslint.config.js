import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import * as astroParser from "astro-eslint-parser";
import tseslint from "typescript-eslint";

const parser = astroParser.parseForESLint ? astroParser : astroParser.default;

export default defineConfig(
  ...astro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: parser,
      parserOptions: { parser: tseslint.parser }
    }
  },
  {
    files: ["**/*.astro", "**/*.tsx"],
    rules: {
      "no-var": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off"
    }
  },
  { ignores: ["dist/", ".astro/", "node_modules/"] }
);
