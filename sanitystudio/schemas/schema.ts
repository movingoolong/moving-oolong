// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import the singleton schemas
import siteSettings from "./singletons/siteSettings";

// Import the document schemas
import bio from "./documents/bio";
import episode from "./documents/episode";
import season from "./documents/season";

// Import the object schemas
import portableText from "./objects/portableText";
// import bioPortableText from "./objects/bioPortableText";
// import episodePortableText from "./objects/episodePortableText";
// import generalPortableText from "./objects/generalPortableText";
// import externalLink from "./objects/externalLink";
// import internalLink from "./objects/internalLink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    bio,
    episode,
    season,
    portableText,
    // bioPortableText,
    // episodePortableText,
    // generalPortableText,
    // externalLink,
    // internalLink,
  ]),
});
