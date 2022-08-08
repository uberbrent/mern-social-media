import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limig: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = "mongodb+srv://uberbrent:Circa03@cluster0.edtoxwt.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('bufferCommands', false)