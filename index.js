const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/jordan.route");
const connectToDataBase = require('./src/database/database')
//Configurando nossa aplicaçao para trabalhar com json
const port = 3333;
const app = express();

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use("/jordans",routes)
// Definindo dados para usar na aplicacao


app.listen(port, () => {
  console.log(`A aplicação está rodando em http://localhost:${port}`);
});
 