// rollup.config.js
export default {
  input: "src/main.js",
  output: {
    // file: "bundle.js",
    format: "es",
    name: "test",
    preserveModules: true,
    dir: "dist",
  },
};
