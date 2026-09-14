import { Router } from "express";
import { getBooks } from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBooks);
bookRouter.post("/", getBooks);
bookRouter.put("/", getBooks);
bookRouter.delete("/", getBooks);

export default bookRouter;
