const esbuild = require("esbuild");
const inlineCSSPlugin = require("esbuild-plugin-inline-css");

esbuild
  .build({
    entryPoints: ["src/MultiSelect.tsx"],
    bundle: true,
    outfile: "dist/MultiSelect.js",
    format: "esm",
    target: "es2015",
    external: ["react", "react-dom"],
    plugins: [inlineCSSPlugin()],
  })
  .catch(() => process.exit(1));
