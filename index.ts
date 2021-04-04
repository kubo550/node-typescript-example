import express from "express";
import cors from "cors";
import { homeRouter } from "./routes/home";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', homeRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
