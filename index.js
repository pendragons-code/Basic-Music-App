const express = require("express")
const port = 3000
const path = require("path")
const app = new express()
app.use(express.static(__dirname));
//app.set("views", path.join(__dirname, "./"));
//app.set("view engine", "ejs")
app.get("/", async (req, res) => {
	res.sendFile('/index.html')
})
app.use(function(req, res){
    res.status(404).send("🍌, 404")
});
app.listen(port, () => {
  console.log(`Express is running on port http://localhost:${port}\nHanging on ${process.pid}`);
})
