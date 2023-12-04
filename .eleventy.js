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

  eleventyConfig.addPassthroughCopy('./src/discography/artist/style.css');
  eleventyConfig.addPassthroughCopy('./src/discography/artist/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/discography/artist/main.js');

  eleventyConfig.addPassthroughCopy('./src/services/style.css');
  eleventyConfig.addPassthroughCopy('./src/services/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/services/main.js');

  eleventyConfig.addPassthroughCopy('./src/blog/style.css');
  eleventyConfig.addPassthroughCopy('./src/blog/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/blog/main.js');

  eleventyConfig.addPassthroughCopy('./src/blog/post/style.css');
  eleventyConfig.addPassthroughCopy('./src/blog/post/core-styles.css');
  eleventyConfig.addPassthroughCopy('./src/blog/post/main.js');

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/admin');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
