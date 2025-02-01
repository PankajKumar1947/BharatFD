import express from 'express'
import connectDB from './config/dbConnect.js'
import faqRouter from './routes/faq.js'
import dotenv from "dotenv";

dotenv.config();
const app = express()

const port = process.env.PORT || 4000
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json());

app.use("/api/faq", faqRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
