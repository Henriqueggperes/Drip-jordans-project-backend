const mongoose = require("mongoose");
const remoteUrl = "mongodb+srv://jd:jd@apidripjordans.vsdtr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const localUrl = "mongodb://localhost:27017/jordans-db"
const connectToDataBase = () => {
  mongoose
    .connect(`${remoteUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MONGO-DB: CONNECTED"))
    .catch((err) =>
      console.log(`ERROR: Erro ao conectar ao MONGO-DB, erro: ${err}`)
    );
};

module.exports = connectToDataBase;
