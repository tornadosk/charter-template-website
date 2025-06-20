const fs = require("fs");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("prettyDate", (value) => {
    return DateTime.fromISO(value).toFormat("LLLL dd, yyyy");
  });

  eleventyConfig.addCollection("events", () => {
    const files = fs.readdirSync("./content/events");
    return files.map(filename => {
      const event = JSON.parse(fs.readFileSync(`./content/events/${filename}`));
      return {
        ...event,
        date: event.date || "",
        _dateObj: new Date(event.date)
      };
    }).sort((a, b) => a._dateObj - b._dateObj);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};