const filesize = require('rollup-plugin-filesize');
const typescript = require('rollup-plugin-typescript');
const commonjs = require('rollup-plugin-commonjs');
const vue = require('rollup-plugin-vue');
const pkg = require('./package.json');

const formats = ['umd', 'esm'];
const globals = {
  'lodash.flatmap': 'flatMap',
  'lodash.get': 'get',
  'remark-parse': 'markdown',
  unified: 'unified',
  vue: 'Vue',
  'vue-class-component': 'Component'
};

export default {
  input: 'lib/vue-remark.ts',
  output: formats.map((format) => ({
    file: `dist/VueRemark.${format}.js`,
    format: format,
    name: 'VueRemark',
    sourcemap: true,
    globals: globals,
    banner: `
      /**
       *
       * Vue Remark
       * ${pkg.name}@${pkg.version}
       * ${pkg.license}
       *
       */
      `
  })),
  external: Object.keys(globals),
  plugins: [
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json'
    }),
    vue(),
    filesize()
  ]
};
