module.exports = function (eleventyConfig) {
	// Folders to copy to build dir
	eleventyConfig.addPassthroughCopy("src/assets/css");
	eleventyConfig.addPassthroughCopy("src/assets/js");

	eleventyConfig.addWatchTarget("./src/assets/css/");
	eleventyConfig.addWatchTarget("./src/assets/js/");


    return {
		dir: {
			input: "src/",
			output: "public",
			includes: "includes"
		},
	};
};