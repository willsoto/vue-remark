const filesize = require("rollup-plugin-filesize");
const typescript = require("rollup-plugin-typescript2");
const vue = require("rollup-plugin-vue");
const pkg = require("./package.json");

const formats = ["umd", "esm", "cjs"];

export default {
  input: "src/vue-remark.ts",
  output: formats.map((format) => ({
    file: `dist/VueRemark.${format}.js`,
    format: format,
    name: "VueRemark",
    sourcemap: true,
    globals: {
      "lodash.flatmap": "flatMap",
      "lodash.get": "get",
      "remark-parse": "markdown",
      unified: "unified",
      vue: "Vue",
      "vue-class-component": "Component"
    },
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
  external: [
    "lodash.flatmap",
    "lodash.get",
    "remark-parse",
    "unified",
    "vue",
    "vue-class-component"
  ],
  plugins: [
    typescript({
      clean: true,
      objectHashIgnoreUnknownHack: true,
      tsconfig: "./tsconfig.build.json"
    }),
    vue(),
    filesize()
  ]
};
