// Continuing to use the deprecated moment because sanity.io still has it as a dependency anyways
import moment from "moment";

import { isUniqueAcrossAllDocuments } from "../../lib/isUniqueAcrossAllDocuments";

export default {
  name: "episode",
  title: "Episode",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "datetime",
      title: "Episode Published Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "season",
      title: "Season",
      type: "reference",
      to: [{ type: "season" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The URL for the episode on the website",
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(".", "")
            .replace(/\s+/g, "-")
            .slice(0, 200),
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "guest",
      title: "Guest",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "bio" }],
        },
      ],
    },
    {
      name: "spotify",
      title: "Spotify Link",
      description:
        "Spotify URL obtained from clicking on Share -> Copy Episode Link",
      type: "url",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      name: "image",
      title: "Episode Photo",
      type: "image",
      initialValue: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: "image-0bb8cab3d006a206597697875c16c852ccd0231f-3000x3000-png",
        },
      },
    },
    {
      // see https://www.sanity.io/docs/block-type
      name: "description",
      title: "Episode Description",
      type: "portableText",
    },
    {
      name: "references",
      title: "Additional References",
      type: "portableText",
    },
  ],
};
