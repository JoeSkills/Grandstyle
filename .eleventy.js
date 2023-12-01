module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/main.js');

  eleventyConfig.addPassthroughCopy('./src/about-us/style.css');
  eleventyConfig.addPassthroughCopy('./src/about-us/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/about-us/main.js');

  eleventyConfig.addPassthroughCopy('./src/contact-us/style.css');
  eleventyConfig.addPassthroughCopy('./src/contact-us/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/contact-us/main.js');

  eleventyConfig.addPassthroughCopy('./src/discography/style.css');
  eleventyConfig.addPassthroughCopy('./src/discography/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/discography/main.js');

  eleventyConfig.addPassthroughCopy('./src/services/style.css');
  eleventyConfig.addPassthroughCopy('./src/services/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/services/main.js');

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/fonts');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
