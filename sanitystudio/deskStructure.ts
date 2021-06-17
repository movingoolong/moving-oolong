// Created following https://youtu.be/YMX2TX3vIAc
import S from "@sanity/desk-tool/structure-builder"

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem().title("Site Settings").child(
                // Display the editor
                S.editor()
                    .id("siteSettings")
                    .schemaType("siteSettings")
                    // Create a document with the ID siteSettings
                    .documentId("siteSettings")
            ),
            S.listItem()
                .title("Seasons")
                .child(S.documentTypeList("season")),
            S.divider(),
            // Filtering episodes by season
            S.listItem()
                .title("Episodes by Season")
                .child(
                    S.documentTypeList("season")
                        .title("Episodes by Season")
                        .child((season) =>
                            S.documentList()
                                .title("Episodes")
                                .filter(
                                    "_type == 'episode' && $season == season._ref"
                                )
                                .params({ season })
                        )
                ),
            // The rest of the
            ...S.documentTypeListItems().filter(
                (item) =>
                    ![
                        "siteSettings",
                        "season",
                        "media.tag",
                        // "bioPortableText",
                        // "eventPortableText",
                        // "generalPortabletext",
                        // "externalLink",
                        // "internalLink",
                    ].includes(item.getId())
            ),
        ])
