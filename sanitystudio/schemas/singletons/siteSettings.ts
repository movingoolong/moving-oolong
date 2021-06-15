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
            name: 'primaryColor',
            title: 'Site Primary Color',
            type: 'colorPicker',
        },
        {
            name: 'secondaryColor',
            title: 'Site Secondary Color',
            type: 'colorPicker'
        },
        {
            name: 'frontPageDescription',
            title: 'Front Page Description',
            type: 'generalPortableText',
        },
        {
            name: 'aboutPageHeader',
            title: 'About Page Header',
            type: 'generalPortableText',
        },
        {
            name: 'aboutPageDescription',
            title: 'About Page Description',
            type: 'generalPortableText',
        },
    ],
}