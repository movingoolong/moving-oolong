// Continuing to use the deprecated moment because sanity.io still has it as a dependency anyways
import moment from "moment"

import { isUniqueAcrossAllDocuments } from "../../lib/isUniqueAcrossAllDocuments"

export default {
    name: "event",
    title: "Event",
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
            title: "Event Date and Time",
            type: "datetime",
        },
        {
            name: "boardYear",
            title: "Board Year",
            type: "reference",
            to: [{ type: "boardYear" }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "facebookLink",
            title: "Facebook Event Link",
            type: "url",
        },
        {
            name: "isFeatured",
            title: "Featured Event",
            type: "boolean",
            description:
                "Whether or not to include the event in the featured section.",
            initialValue: false,
        },
        {
            name: "eventTags",
            title: "Tags",
            type: "tags",
        },
        {
            name: "image",
            title: "Event Cover Photo",
            type: "image",
        },
        {
            // see https://www.sanity.io/docs/block-type
            name: "description",
            title: "Event Description",
            type: "eventPortableText",
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
