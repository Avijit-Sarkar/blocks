import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import author from "./schemas/author";
import home from "./schemas/home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, author, category, blockContent],
};
