const chapter = require("./content/chapter.json");
const events = require("./content/events.json");

module.exports = {
  chapter,
  events,
  currentYear: new Date().getFullYear()
};
