import { CollectionConfig } from 'payload'
import { triggerNetlifyBuild } from '../utilities/triggerNetlifyBuild'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  labels: {
    singular: 'Annuncio di Lavoro',
    plural: 'Annunci di Lavoro',
  },
  admin: {
    useAsTitle: 'jobTitle',
    defaultColumns: ['jobTitle', 'department', 'location', 'contractType', 'status'],
  },
  fields: [
    {
      name: 'jobTitle',
      type: 'text',
      label: 'Titolo della Posizione',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Identificativo URL',
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Sede di Lavoro',
      required: true,
    },
    {
      name: 'department',
      type: 'text',
      label: 'Dipartimento',
    },
    {
      name: 'contractType',
      type: 'select',
      label: 'Tipo di Contratto',
      options: [
        { label: 'Full-time', value: 'full_time' },
        { label: 'Part-time', value: 'part_time' },
        { label: 'Indeterminato', value: 'permanent' },
        { label: 'Apprendistato', value: 'apprenticeship' },
        { label: 'Freelance / P. IVA', value: 'freelance' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: "Descrizione dell'annuncio",
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Immagine Annuncio (Opzionale)',
      required: false, // Come richiesto, è opzionale
    },
    {
      name: 'status',
      type: 'select',
      label: 'Stato Annuncio',
      defaultValue: 'draft',
      options: [
        { label: 'Bozza', value: 'draft' },
        { label: 'Pubblicato', value: 'published' },
        { label: 'Chiuso', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'expirationDate',
      type: 'date',
      label: 'Scadenza Annuncio',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [async () => { await triggerNetlifyBuild() }],
    afterDelete: [async () => { await triggerNetlifyBuild() }],
  },
}
