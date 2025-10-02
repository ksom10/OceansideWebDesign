const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // ✅ Copy uploaded images into the output folder (_site)
  eleventyConfig.addPassthroughCopy({ "images/uploads": "images/uploads" });

  // ✅ Blog collection (all Markdown files in content/blog)
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md");
  });

  // ✅ Date filter (formats frontmatter dates nicely)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MMMM d, yyyy");
  });

  // ✅ Year filter (for footer use)
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "content",       // content source folder
      includes: "../_includes", // Nunjucks layouts
      output: "_site"          // build output folder
    }
  };
};
