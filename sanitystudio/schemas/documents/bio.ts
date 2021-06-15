export default {
    name: "bio",
    title: "Bio",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "position",
            title: "Position",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "boardYear",
            title: "Board Year",
            type: "reference",
            to: [{type: "boardYear"}],
            validation: Rule => Rule.required(),
        },
        {
            name: "major",
            title: "Major(s)",
            type: "tags",
        },
        {
            name: "propic",
            title: "Profile Picture",
            type: "image",
        },
        {
            // see https://www.sanity.io/docs/block-type
            name: "description",
            title: "Description",
            type: "bioPortableText",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
}
