import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Szolgáltatás',
    plural: 'Szolgáltatások',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
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
      label: 'Ikon (pl. Phosphor ikon neve)',
    },
    {
      name: 'highlights',
      type: 'textarea',
      label: 'Kiemelt pontok (soronként egy)',
      admin: {
        description: 'Soronként egy rövid kiemelés, amelyek felsorolásként jelennek meg a kártyán.',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sorrend',
      defaultValue: 0,
    },
  ],
}
