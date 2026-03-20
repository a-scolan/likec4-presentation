import { defineConfig } from 'likec4/config'

export default defineConfig({
  name: 'coffee-v2',
  title: 'Coffee V2 - Le Café Mobile (asynchrone notifiant)',
  include: {
    paths: ['../shared']
  },
  imageAliases: {
    '@': '../shared/images/'
  }
})
