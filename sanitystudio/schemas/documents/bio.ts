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
      name: "isGuest",
      title: "Is Guest?",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/@.*/, {
          name: "Instagram",
        }).error("Must begin with @"),
    },
    {
        name: "twitter",
        title: "Twitter",
        type: "string",
        validation: (Rule) =>
          Rule.regex(/@.*/, {
            name: "Twitter",
          }).error("Must begin with @"),
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
      type: "portableText",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
