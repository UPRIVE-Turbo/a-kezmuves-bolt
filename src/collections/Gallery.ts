import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Galéria kép',
    plural: 'Galéria',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'alt',
    defaultColumns: ['image', 'alt'],
  },
  access: {
    read: () => true,
  },
  orderable: true,
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Kép',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      label: 'Alt szöveg',
      required: true,
    },
  ],
}
