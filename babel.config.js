module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    production: {
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
};
