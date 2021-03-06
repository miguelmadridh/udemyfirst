const express = require("express");
// vamos a importar hbs
const hbs = require("hbs");
require('./hbs/helpers')
const app = express();

const port = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/parciales");


app.set("view engine", "hbs");

// para ssetterar el engine deHBS
app.set("view engine", "hbs");

// se cambia send por render para renderizar los archivoss hbs
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "miguel anGel",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.listen(port, () => {
  console.log(`escuchando en el  ${port}`);
});
