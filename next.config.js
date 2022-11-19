const path = require('path')
const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')

module.exports = withImages({
  esModule: true,
  i18n,
  inlineImageLimit: false,
  images: {
    domains: ['github.com', 'picsum.photos'],
    imageSizes: [16, 32, 64, 128],
    deviceSizes: [480, 768, 1080, 1440]
  },
  env: {
    BASE_URL: process.env.NODE_ENV !== 'production' ? 'http://localhost:9000' : 'https://picometer.me',
    API_PATH: process.env.NODE_ENV !== 'production' ? 'http://localhost:9000' : 'https://picometer.me',
    NEXTAUTH_URL: 'http://localhost:9000',
    FIREBASE_API_KEY: 'AIzaSyAL0bhz8FHbos4HFMbGrkmKOH3rkL0vsas',
    FIREBASE_AUTH_DOMAIN: 'vitameet-d889c.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'get these keys from your firebase console',
    FIREBASE_PROJECT_ID: 'vitameet-d889c',
    FIREBASE_STORAGE_BUCKET: 'vitameet-d889c.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '381033277756',
    FIREBASE_MEASUREMENT_ID: 'G-P0B9JS5TGH',
    FIREBASE_APP_ID: '1:381033277756:web:bef2384c0cda8366629639',
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }

    return config
  }
})
