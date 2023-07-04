import { type SchemaTypeDefinition } from "sanity";

import about from "./schemas/about";
import blockContent from "./schemas/blockContent";
import home from "./schemas/home";
import experience from "./schemas/experience";
import socialLinks from "./schemas/socialLinks";
import work from "./schemas/work";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, socialLinks, about, experience, work, blockContent],
};
