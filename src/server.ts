import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/connectDB";


dotenv.config();


const app = express();
app.use(express.json());

connectDB();

app.get('/', (req: express.Request, res: express.Response) => {
    return res.json({hello: "world!"});
});

app.listen(process.env.PORT || 3001, () => {
    console.log("listening on port " + process.env.PORT || 3001);
})