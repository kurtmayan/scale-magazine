import { type SchemaTypeDefinition } from "sanity";
import blog from "./blog";
import category from "./category";
import author from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, category, author],
};
