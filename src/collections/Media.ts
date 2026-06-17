import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Médiafájl',
    plural: 'Médiatár',
  },
  admin: {
    group: 'Tartalom',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt szöveg',
      required: true,
    },
  ],
  upload: true,
}
