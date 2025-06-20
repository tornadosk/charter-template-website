const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("events", () => {
    const files = fs.readdirSync("./content/events");

    return files.map((filename) => {
      const fullPath = `./content/events/${filename}`;
      const event = JSON.parse(fs.readFileSync(fullPath));

      return {
        ...event,
        date: event.date ?? "", // ensure it's a string
      };
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
