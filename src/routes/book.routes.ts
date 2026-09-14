import { Router } from "express";
import {
  createBook,
  deleteBook,
  editBook,
  getBooks,
  getBooksById,
} from "../controllers/book.controller";
import { validateBody, validateParams } from "../middlewares/validate";

export const bookRouter = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", validateParams, getBooksById);
bookRouter.post("/", validateBody, createBook);
bookRouter.put("/:id", validateParams, validateBody, editBook);
bookRouter.delete("/:id", validateParams, deleteBook);
