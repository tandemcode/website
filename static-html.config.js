const fs = require("fs")

module.exports = {
	outputDirectory: "public",
	project: JSON.parse(fs.readFileSync(__dirname + "/app.tdproject", "utf8")),
	pages: [
		{
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
