import { Request, Response } from "express";
import { Book } from "../models/book.model";

export async function getBooks(req: Request, res: Response) {
  try {
    const books = await Book.find({ createdAt: -1 });
    return res.status(201).json({ success: true, books });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function getBooksById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const book = await Book.findById({ id });
    return res.status(201).json({ success: true, book });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function createBook(req: Request, res: Response) {
  try {
    const { title, autor, year, edition, category, local } = req.body;
    const book = await Book.create({
      title,
      autor,
      year,
      edition,
      category,
      local,
    });
    return res.status(200).json({ success: true, book });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function editBook(req: Request, res: Response) {
  try {
    const { title, autor, year, edition, category, local } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        autor,
        year,
        edition,
        category,
        local,
      },
      { new: true, runValidators: true },
    );
    return res.status(200).json({ success: true, book });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function deleteBook(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete({ id });
    return res.status(200).json({ success: true, book });
  } catch (error) {
    return res.status(500).json(error);
  }
}
