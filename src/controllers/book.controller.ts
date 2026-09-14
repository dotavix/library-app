import { Request, Response } from "express";

export async function getBooks(req: Request, res: Response) {
  return res.send("Listar libros");
}

export async function getBooksById(req: Request, res: Response) {
  return res.send("Listar libros");
}

export async function createBook(req: Request, res: Response) {
  return res.send("Listar libros");
}

export async function editBook(req: Request, res: Response) {
  return res.send("Listar libros");
}

export async function deleteBook(req: Request, res: Response) {
  return res.send("Listar libros");
}
