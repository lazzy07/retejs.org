import tseslint from 'typescript-eslint';
import configs from 'rete-cli/configs/eslint.mjs';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
  ...configs,
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      vue: eslintPluginVue,
      '@typescript-eslint': eslintPluginTypescript,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'class-methods-use-this': 'off',
      'no-mixed-operators': 'off',
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      'import/no-unresolved': 'off',
      'max-len': 'off',
      'vue/multi-word-component-names': 'off',
      'import/no-webpack-loader-syntax': 'off',
      'import/no-named-as-default': 'off',
      'max-classes-per-file': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-cycle': 'off',
      'import/extensions': 'off',
      'vue/no-reserved-component-names': 'warn',
      'vue/require-default-prop': 'warn',
    },
  },
);
