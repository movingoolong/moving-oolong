export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'frontPageDescription',
            title: 'Front Page Description',
            type: 'portableText',
        },
        {
            name: 'aboutPageHeader',
            title: 'About Page Header',
            type: 'portableText',
        },
        {
            name: 'aboutPageDescription',
            title: 'About Page Description',
            type: 'portableText',
        },
    ],
}