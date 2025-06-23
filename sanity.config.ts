import {defineConfig} from 'sanity'
import {schemaTypes} from './schemaTypes'
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: 'default',
  title: 'Hush Harbor',
  projectId: '0s7omnpm',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  }
})
