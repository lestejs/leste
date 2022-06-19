let bundler = new Parcel({
  defaultConfig: {
    ...defaultConfigContents,
    filePath: require.resolve("@parcel/config-default"),
  },
  entries: "src/target.js",
  isLibrary: true,
  mode: "production",
  outputFormat: "esmodule",
  target: {
    outputFormat: "esmodule",
    distDir: "./bundlers",
  },
});

await bundler.run();