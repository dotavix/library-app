import { NextFunction, Request, Response } from "express";
import { ZodSchema, ZodError } from "zod/v3";

export const validateBody = (schema: ZodSchema) => {
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      const zerr = error as ZodError;
      return res.status(400).json({
        success: false,
        msg: "Body inválido",
        errors: zerr.flatten(),
      });
    }
  };
};

export const validateParams = (schema: ZodSchema) => {
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.params = schema.parse(req.params);
      next();
    } catch (error) {
      const zerr = error as ZodError;
      return res.status(400).json({
        success: false,
        msg: "Parametros invalidos",
        errors: zerr.flatten(),
      });
    }
  };
};
