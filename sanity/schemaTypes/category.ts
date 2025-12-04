import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "addtags",
      title: "Add Tags",
      type: "string",
      validation: (text) => text.lowercase(),
    }),
  ],
});
