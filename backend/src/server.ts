import express from 'express';
import { routes } from './routes';
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(cors());

app.use(express.json())
const port = 3333;
app.use(routes);

mongoose.connect('mongodb://localhost:27017/pokedex-local',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);




app.listen((port), () => {
    console.log("🚀 server is flying");
})