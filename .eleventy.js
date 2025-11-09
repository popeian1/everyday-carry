
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("entry", function(image, alt, description) {
    return `<div class="entryflex">
      <img class="entryimage" src="${image}" alt="${alt}">
      <p class="entryparagraph">${description}</p>
    </div>`;
  });
};