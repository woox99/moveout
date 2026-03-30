module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        }
    };

};