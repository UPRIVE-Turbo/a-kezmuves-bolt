import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Szolgáltatás',
    plural: 'Szolgáltatások',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'image'],
  },
  access: {
    read: () => true,
  },
  orderable: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Név',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Leírás',
    },
    {
      name: 'price',
      type: 'text',
      label: 'Ár',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Ikon',
      admin: {
        description: 'Egyik a következők közül: gift, palette, scissors, package.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Kép',
      admin: {
        description: 'A szolgáltatás mellett megjelenő kép.',
      },
    },
    {
      name: 'highlights',
      type: 'textarea',
      label: 'Kiemelt pontok (soronként egy)',
      admin: {
        description: 'Soronként egy rövid kiemelés, amelyek felsorolásként jelennek meg a kártyán.',
      },
    },
  ],
}
