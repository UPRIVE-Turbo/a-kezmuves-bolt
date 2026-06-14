import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  labels: {
    singular: 'Beküldés',
    plural: 'Beküldések',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'email', 'service', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Név',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefonszám',
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail cím',
      required: true,
    },
    {
      name: 'service',
      type: 'text',
      label: 'Téma / szolgáltatás',
    },
    {
      name: 'date',
      type: 'date',
      label: 'Időpont',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Üzenet',
    },
  ],
}
