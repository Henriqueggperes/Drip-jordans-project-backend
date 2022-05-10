const mongoose = require("mongoose");
const remoteUrl = "mongodb+srv://jd:jd@apidripjordans.vsdtr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const localUrl = "mongodb://localhost:27017/jordans-db"

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas Conectado!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
