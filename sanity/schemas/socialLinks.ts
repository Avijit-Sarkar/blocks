import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialLinks",
  title: "Social Links",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(20),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
});
