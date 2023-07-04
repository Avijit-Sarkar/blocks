import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(45)
          .warning("Shorter titles are usually better"),
    }),
    defineField({
      name: "tagLine",
      title: "Tag Line",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(80)
          .warning("Shorter tag lines are usually better"),
    }),
    defineField({
      name: "mainImage",
      description: "webp image formates are easy and fast to load.",
      title: "Main image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required().min(10).max(20),
        },
      ],
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "reference",
      to: { type: "socialLinks" },
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "reference",
      to: { type: "socialLinks" },
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "reference",
      to: { type: "socialLinks" },
    }),
    defineField({
      name: "linkedIn",
      title: "LinkedIn",
      type: "reference",
      to: { type: "socialLinks" },
    }),
  ],
});
