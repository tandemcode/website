const fs = require("fs")

module.exports = {
	outputDirectory: "docs",
	project: JSON.parse(fs.readFileSync(__dirname + "/app.tdproject", "utf8")),
	pages: [
		{
			title: "Build web components visually",
			fileName: "index.html",
			component: {
				name: "Website",
				filePath: "src/main.pc",
			},
			variables: {
			}
		}
	]
};
