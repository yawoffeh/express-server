let mongoose = require("mongoose");
let express = require("express");
const userModel = require("./models");

// require('dotenv').config();

let port = process.env.port || 3004;

let app = express()
app.use(express.json());


mongoose.connect(process.env.URI,
  {
    useNewUrlParser: true
  }, (err)=>{
    if (err) throw err;
    console.log("connected to database");
});

app.listen(port, ()=> {
  console.log(`Listening on port http://localhost:${port}`);
});

app.post("/add_student", async (req, res)=> {
	const user = new userModel(req.body);

	try {
		console.log(req.body);
		await user.save();
		res.send(user);
	}catch (error){
		res.status(500).send(error);
	}
});

app.get("/:studentid", async (req, res) => {
	const users = await userModel.find({studentid: req.params.studentid});

	try {
		res.send(users);
	} catch (error){
		res.status(500).send(error);
	}
});

app.get("/", (req, res) => {
	res.send("server is working");
});

module.exports = app;
