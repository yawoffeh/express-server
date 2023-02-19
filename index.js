let express = require("express");
let app = express();

app.get("/", (req, res) => {
	res.send("Hey your server is working");
});

app.listen(5000, () => {
	console.log("listening on port 5000");
});

module.exports = app;
