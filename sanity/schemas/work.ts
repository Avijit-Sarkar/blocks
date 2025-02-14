import { defineField, defineType } from "sanity";

export default defineType({
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    defineField({
      name: "Title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(80),
    }),
  ],
});
