// src/app.ts
import express from 'express';
import cors from 'cors';
//import helmet from 'helmet';
//import routes from './routes'; // ou ajuste conforme sua estrutura

export const app = express();

app.use(cors());
//app.use(helmet());
app.use(express.json());
//app.use(routes); // sua definição de rotas
