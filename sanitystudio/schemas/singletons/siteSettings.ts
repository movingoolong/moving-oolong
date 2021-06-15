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
        }
    ],
}