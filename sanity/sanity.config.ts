import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'brown-panther',

  projectId: 'ikgxd8km',
  dataset: 'unitmaid',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
