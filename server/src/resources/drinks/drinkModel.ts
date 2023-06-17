import "express-async-errors";
import { InferSchemaType, Schema, model } from "mongoose";

export const drinkSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: {type: String, required: true}
});

export type Drink = InferSchemaType<typeof drinkSchema>;

export const DrinkModel = model("drink", drinkSchema);