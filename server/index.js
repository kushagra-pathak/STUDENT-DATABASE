import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use('/students', studentRoutes);
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));




const CONNECTION_URL = 'mongodb+srv://kushagrapathak789:1234@cluster0.xehv0zl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log('Connection is established and running on port: ${PORT}')
)).catch((err) => console.log(err.message));


   
