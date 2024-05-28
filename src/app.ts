import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import postRouter from "./routes/post.route";
import { dbConnect } from "./utils/dbConnect";
import fileUpload from "express-fileupload";
import userRouter from "./routes/user.route";
// import cors from "cors";
// import cors
// import permitRoute from "./router/permits.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
// app.use(cors({ origin: "*" }));

dbConnect();
app.use(express.json());
app.use(fileUpload());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world ...");
});

app.use("/api/post", postRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
