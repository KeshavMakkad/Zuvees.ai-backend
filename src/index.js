import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectToDB from "./db.js";
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8001;

connectToDB();

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`);
})