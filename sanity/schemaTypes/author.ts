import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  title: "Author Account",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "middleName",
      title: "Middle Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
    }),
  ],
});
