const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();
const categoriasRoute= require('./routes/categoriaRutas')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
//middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toLocaleString('en-US', { hour12: true });
    next();
  });
app.use('/api/v1',categoriasRoute)//ruta principal
//env
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})
//fin
const port= process.env.PORT;
app.listen(port);
console.log(`Categoria API Iniciando en el puerto:  ${port}`);