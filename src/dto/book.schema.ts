import { z } from "zod";

export const ObjectIdSchema = z
  .string()
  .regex(/[0-9a-fA-F]{24}$/, "Id no es válido");

export const BookCreateSchema = z
  .object({
    title: z.string().trim().min(1, "Titulo es requerido"),
    autor: z.string().trim().min(1, "Autor es requerido"),
    year: z.string().trim().optional().default(""),
    edition: z.string().trim().optional().default(""),
    category: z.string().trim().optional().default(""),
    local: z.string().trim().optional().default(""),
  })
  .strict();

export const BookUpdateSchema = BookCreateSchema.partial().refine((data) => {
  Object.keys(data).length > 0,
    { message: "Al menos un campo debe ser modificado." };
});

export const BookIDParamSchema = z.object({
  id: ObjectIdSchema,
});
