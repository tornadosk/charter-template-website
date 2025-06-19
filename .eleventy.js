module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};