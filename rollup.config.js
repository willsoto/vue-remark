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
      "remark-parse": "markdown",
      unified: "unified",
      vue: "Vue"
    },
    banner: `
      /**
       * ${pkg.name}@${pkg.version}
       */
      `
  })),
  external: ["remark-parse", "unified", "vue"],
  plugins: [
    typescript({
      clean: true,
      objectHashIgnoreUnknownHack: true
    }),
    vue(),
    filesize()
  ]
};
