module.exports = {
	outputDirectory: __dirname + "/public",
	pages: [
		{
			fileName: "index.html",
			component: {
				name: "Website",
				filePath: __dirname + "src/main.pc",
			},
			variables: {
			}
		}
	]
};
