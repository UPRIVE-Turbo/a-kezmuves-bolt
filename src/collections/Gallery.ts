import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Galéria kép',
    plural: 'Galéria',
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['image', 'alt', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
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
    {
      name: 'order',
      type: 'number',
      label: 'Sorrend',
      defaultValue: 0,
    },
  ],
}
