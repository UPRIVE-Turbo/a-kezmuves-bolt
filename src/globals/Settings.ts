import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Beállítások',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Cégnév',
      defaultValue: 'A Kézműves Bolt',
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
    },
    {
      name: 'address',
      type: 'text',
      label: 'Cím',
      defaultValue: 'Virág Benedek u. 3, 8200 Veszprém',
    },
    {
      name: 'openingHours',
      type: 'array',
      label: 'Nyitvatartás',
      fields: [
        {
          name: 'day',
          type: 'text',
          label: 'Nap',
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Nyitvatartás',
        },
      ],
    },
    {
      name: 'facebook',
      type: 'text',
      label: 'Facebook link',
      defaultValue: 'https://www.facebook.com/akezmuves.bolt',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram link',
    },
  ],
}
