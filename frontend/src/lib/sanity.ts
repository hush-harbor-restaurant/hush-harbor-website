import {createClient} from '@sanity/client'

export const sanity = createClient({
  projectId: '0s7omnpm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
