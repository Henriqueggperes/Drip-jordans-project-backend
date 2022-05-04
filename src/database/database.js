const mongoose = require("mongoose");

const connectToDataBase = () => {
  mongoose
    .connect("mongodb://localhost:27017/jordans-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MONGO-DB: CONNECTED"))
    .catch((err) =>
      console.log(`ERROR: Erro ao conectar ao MONGO-DB, erro: ${err}`)
    );
};

module.exports = connectToDataBase;
