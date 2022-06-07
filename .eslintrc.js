module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    curly: 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': 'off',
    'no-unneeded-ternary': 'off',
    'no-lonely-if': 'off',
    'no-extra-boolean-cast': 'off',
    'arrow-spacing': 'off',
    'space-infix-ops': 'off',
    'no-redeclare': 'off',
    'brace-style': 'off',
    'eqeqeq': 'off',
    'prefer-regex-literals': 'off',
    'object-shorthand': 'off',
    'vue/max-attributes-per-line': 'off',
    'quote-props': 'off',
    'arrow-parens': 'off',
    'import/first': 'off',
    'eol-last': 'off',
    'camelcase': 'off',
    'quotes': 'off',
    'no-trailing-spaces': 'off',
    'object-curly-spacing': 'off',
    'import/order': 'off',
    'comma-dangle': 'off',
    'keyword-spacing': 'off',
    'new-cap': 'off',
    'require-await': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  }
}
