const express = require("express");
const routes = require("./routes");
const mongoose  = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/restapis', {
//     useNewUrlParser: true
// })

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb+srv://tomasduh:12345@cluster0.sntrynu.mongodb.net/?retryWrites=true&w=majority');
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }
  
  // Llama a la función para conectar a la base de datos
connectToDatabase();

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes());


//puerto 
app.listen(3000);

