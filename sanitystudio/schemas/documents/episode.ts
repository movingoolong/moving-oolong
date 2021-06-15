// Continuing to use the deprecated moment because sanity.io still has it as a dependency anyways
import moment from "moment"

import { isUniqueAcrossAllDocuments } from "../../lib/isUniqueAcrossAllDocuments"

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
        },
        {
            name: "season",
            title: "Season",
            type: "reference",
            to: [{ type: "season" }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "spotify",
            title: "Spotify Link",
            description: "Spotify URL obtained from clicking on Share -> Copy Episode Link",
            type: "url",
        },
        {
            name: "episodeTags",
            title: "Tags",
            type: "tags",
        },
        {
            name: "image",
            title: "Episode Photo",
            type: "image",
        },
        {
            // see https://www.sanity.io/docs/block-type
            name: "description",
            title: "Episode Description",
            type: "episodePortableText",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            hidden: true,
            options: {
                source: (doc) =>
                    doc.datetime
                        ? `${doc.title}-${moment(doc.datetime).year()}`
                        : doc.title,
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
                isUnique: isUniqueAcrossAllDocuments,
            },
        },
    ],
}
