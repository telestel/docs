module.exports = {
  purge: ['./docs/**/*.mdx', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  corePlugins: { preflight: false, container: false },
  important: '#tailwind',
};
