const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  // Dynamic event loader for folder-based JSON
  eleventyConfig.addCollection("events", function () {
    const eventFiles = fs.readdirSync("./content/events");
    return eventFiles.map(file => {
      const data = JSON.parse(fs.readFileSync(`./content/events/${file}`));
      return data;
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};