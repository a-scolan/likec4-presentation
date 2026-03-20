import { defineConfig } from 'likec4/config'

export default defineConfig({
  name: 'coffee-v1',
  title: 'Coffee V1 - Le Comptoir (synchrone côté utilisateur)',
  include: {
    paths: ['../shared']
  },
  imageAliases: {
    '@': '../shared/images/'
  }
})
