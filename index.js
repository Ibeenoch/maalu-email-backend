import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './config/db.js';
import emailRoute from './route/email.js';

const app = express();

dotenv.config();

connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', emailRoute)

const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})