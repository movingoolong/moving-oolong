import { HiOutlineLink } from "react-icons/hi";

export default {
  name: "internalLink",
  type: "object",
  title: "Internal Link",
  icon: HiOutlineLink,
  fields: [
    {
      name: "reference",
      title: "Reference",
      type: "reference",
      weak: true,
      to: [{ type: "episode" }],
    },
  ],
};
