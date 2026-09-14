import express from "express";
import cors from "cors";
import bookRouter from "./routes/book.routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/books", bookRouter);
