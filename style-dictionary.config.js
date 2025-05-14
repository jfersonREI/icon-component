export default {
  source: ["src/tokens/tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/",
      files: [
        {
          destination: "index.css",
          format: "css/variables",
        },
      ],
    },
  },
};
