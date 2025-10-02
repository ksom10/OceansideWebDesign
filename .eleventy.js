const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md");
  });

  // Date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MMMM d, yyyy");
  });

  // Year filter (for footer)
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site"
    }
  };
};
