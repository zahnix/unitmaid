import { SchemaTypeDefinition } from 'sanity';

const blogs: SchemaTypeDefinition = {
  type: 'document',
  name: 'blog',
  title: 'Blog',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      required: true,
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      required: true,
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      required: true,
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      required: true,
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      required: true,
    },
  ],
};

export default blogs;
