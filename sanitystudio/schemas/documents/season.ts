export default {
    name: 'season',
    title: 'Season',
    type: 'document',
    fields: [
        {
            name: 'season',
            title: 'Season #',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
    ],
}