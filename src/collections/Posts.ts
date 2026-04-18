import { CollectionConfig, FieldHook } from 'payload'
import { formatSlug } from '../utilities/formatSlug'

const formatSlugHook: FieldHook = ({ value, data }) => {
  if (value && typeof value === 'string') {
    return formatSlug(value)
  }

  const title = data?.title

  if (title && typeof title === 'string') {
    return formatSlug(title)
  }

  return value
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Articolo',
    plural: 'Articoli',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      label: 'Titolo',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Identificativo URL',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlugHook],
      },
    },
    {
      name: 'content',
      label: 'Contenuto',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Immagine in evidenza',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'publishedDate',
      label: 'Data di pubblicazione',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      defaultValue: () => new Date(),
    },
  ],
}
