import express from "express";
import routes from "./routes/routes.js";
import sequelize from "./config/database.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", routes);

async function connect(){
  try {
    await sequelize.authenticate();
    console.log("conexao com o banco de dados bem sucedida");
  }catch(error){
    console.error("erro ao fazer a conexao")
  }
}

connect();

app.listen(PORT, () => {
  console.log("Servidor Ativo!");
});