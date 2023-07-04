import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "About",
      title: "About",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(180),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: "post",
      title: "Work Post",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(18),
    }),
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      description:
        "Edit to portrait image for better experience, and webp images are more easy to use",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required().max(15),
        },
      ],
    }),
  ],
});
