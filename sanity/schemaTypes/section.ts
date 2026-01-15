import { defineType, defineField } from "sanity";

export default defineType({
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    defineField({
      name: "groupName",
      title: "Group Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "showExtraFields",
      title: "Show Category / Blog",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "blog",
      title: "Blog",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog" }],
        },
      ],
      hidden: ({ parent }) => !parent?.showExtraFields,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      hidden: ({ parent }) => parent?.showExtraFields,
    }),
  ],
});
