import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Banco de dados conectado!");
        app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
    })
    .catch((error) => console.log(error));
