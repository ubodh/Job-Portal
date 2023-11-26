const express = require("express");
const app = express();
port = 8000;
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);
// app.use(express.urlencoded())
app.use("/", require("./routes"));
app.use(express.static("./assets")); // for getting static
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
    return;
  }
  console.log(`Server is running at http://localhost:${port}`);
});


