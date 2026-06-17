import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Beállítások',
  admin: {
    group: 'Beállítások',
  },
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
      admin: {
        description: 'A kapcsolat szekcióban és a láblábban jelenik meg, kattintható telefonszámként.',
      },
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
      labels: {
        singular: 'Nyitvatartási sor',
        plural: 'Nyitvatartási sorok',
      },
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
    {
      name: 'hero',
      type: 'group',
      label: 'Hero szekció',
      fields: [
        {
          name: 'badge',
          type: 'text',
          label: 'Felirat a cím felett',
          admin: { description: 'Pl. "Veszprém, Virág Benedek u. 3."' },
        },
        {
          name: 'headingLine1',
          type: 'text',
          label: 'Cím — első sor',
        },
        {
          name: 'headingLine2',
          type: 'text',
          label: 'Cím — második sor',
        },
        {
          name: 'headingHighlight',
          type: 'text',
          label: 'Cím — kiemelt rész',
          admin: { description: 'A cím harmadik, kiemelt színnel megjelenő sora.' },
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Alcím / leírás',
        },
        {
          name: 'ctaPrimaryLabel',
          type: 'text',
          label: 'Elsődleges gomb felirata',
        },
        {
          name: 'ctaPrimaryHref',
          type: 'text',
          label: 'Elsődleges gomb célja',
          admin: { description: 'Pl. "#kinalatunk" vagy egy teljes URL.' },
        },
        {
          name: 'ctaSecondaryLabel',
          type: 'text',
          label: 'Másodlagos gomb felirata',
        },
        {
          name: 'ctaSecondaryHref',
          type: 'text',
          label: 'Másodlagos gomb célja',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Háttérkép',
        },
        {
          name: 'badgeCardText',
          type: 'text',
          label: 'Lebegő kártya szövege',
          admin: { description: 'A kép sarkában lebegő kis kártya szövege.' },
        },
      ],
    },
    {
      name: 'servicesSection',
      type: 'group',
      label: 'Kínálatunk szekció',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Cím',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Leírás',
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'Rólunk szekció',
      fields: [
        {
          name: 'backgroundText',
          type: 'text',
          label: 'Háttérfelirat',
          admin: { description: 'A szekció hátterében nagy betűkkel megjelenő szöveg.' },
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Idézet / vezérgondolat',
        },
        {
          name: 'paragraph',
          type: 'textarea',
          label: 'Szöveg',
        },
        {
          name: 'founderName',
          type: 'text',
          label: 'Vezető neve',
        },
        {
          name: 'founderTitle',
          type: 'text',
          label: 'Vezető beosztása',
        },
        {
          name: 'founderImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Vezető fotója',
        },
      ],
    },
    {
      name: 'gallerySection',
      type: 'group',
      label: 'Galéria szekció',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Cím',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Alcím',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Kapcsolat szekció',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Cím',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Leírás',
        },
        {
          name: 'mapEmbedUrl',
          type: 'text',
          label: 'Google Maps embed URL',
          admin: { description: 'A kapcsolat szekcióban megjelenő térkép beágyazási URL-je.' },
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Lábléc',
      fields: [
        {
          name: 'tagline',
          type: 'textarea',
          label: 'Rövid szlogen',
        },
        {
          name: 'copyright',
          type: 'text',
          label: 'Copyright szöveg',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: {
        description: 'Keresőoptimalizálási és Open Graph adatok.',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta cím',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta leírás',
        },
      ],
    },
  ],
}
