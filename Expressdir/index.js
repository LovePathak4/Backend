const express = require("express");
const app = express();



console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("you contected root path");
});

app.get("/apple", (req, res) => {
  res.send("you contected  to red apple path");
});

//404 hadler (must be last)

app.use((req, res) => {
    res.status(404).send("Route Not Found");
});


// app.use((req, res) => {
//   console.log(req);
//   console.log("request received");
//   // res.send({
//   //   name:"apple",
//   //   color:"red",  
//   // });
// });