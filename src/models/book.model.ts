import { Schema, model, InferSchemaType, Types } from "mongoose";
import { title } from "node:process";
import { trim } from "zod";

const bookSchema = new Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    autor: { type: String, required: true, unique: true, trim: true },
    year: { type: String, trim: true },
    edition: { type: String, trim: true },
    category: { type: String, trim: true },
    local: { type: String, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id?.toString();
        return ret;
      },
    },
  },
);

export type BookDoc = InferSchemaType<typeof bookSchema> & {
  _id: Types.ObjectId;
};

export const Book = model<BookDoc>("Book", bookSchema);
