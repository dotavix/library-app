import { NextFunction, Request, Response } from "express";
import { BookCreateSchema, BookIDParamSchema } from "../dto/book.schema";

export const validateBody = () => {
  (req: Request, res: Response, next: NextFunction) => {
    const result = BookCreateSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        errors: result.error.issues,
      });
      return;
    }
    next();
  };
};

export const validateParams = () => {
  (req: Request, res: Response, next: NextFunction) => {
    const result = BookIDParamSchema.safeParse(req.params);
    if (!result.success) {
      res.status(400).json({
        errors: result.error.issues,
      });
      return;
    }
    next();
  };
};
