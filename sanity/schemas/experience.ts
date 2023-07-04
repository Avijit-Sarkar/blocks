import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "companyLink",
      title: "Company Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      description: "city, state",
      placeholder: "Mountain View, CA",
      type: "string",
      validation: (Rule) => Rule.required().min(10),
    }),

    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Last Working Month and Year",
      description: "Format (YYYY-Month)",
      name: "lastWorkingMonth",
      placeholder: "eg: 2022-JULY",
      type: "string",
    }),
    defineField({
      name: "workDetails",
      title: "Work details",
      placeholder:
        "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(220),
    }),
  ],
});
