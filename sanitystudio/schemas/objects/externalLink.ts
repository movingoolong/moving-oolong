import { HiOutlineExternalLink } from "react-icons/hi";

export default {
  name: "externalLink",
  type: "object",
  title: "External URL",
  icon: HiOutlineExternalLink,
  fields: [
    {
      title: "URL",
      name: "href",
      type: "url",
    },
  ],
};
