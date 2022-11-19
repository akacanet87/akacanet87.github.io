const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
  inlineImageLimit: false,
  images: {
    domains: ['github.com'],
  },
  env: {
    BASE_URL: process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'https://picometer.me',
    VITA_UID: 'VITA_UID',
    GATHER_TOWN_API_KEY: '9xFQ0Xmq3VhX35Bz',
    FIREBASE_API_KEY: 'AIzaSyAL0bhz8FHbos4HFMbGrkmKOH3rkL0vsas',
    FIREBASE_AUTH_DOMAIN: 'vitameet-d889c.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'get these keys from your firebase console',
    FIREBASE_PROJECT_ID: 'vitameet-d889c',
    FIREBASE_STORAGE_BUCKET: 'vitameet-d889c.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '381033277756',
    FIREBASE_MEASUREMENT_ID: 'G-P0B9JS5TGH',
    FIREBASE_APP_ID: '1:381033277756:web:bef2384c0cda8366629639',
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'pages'),
      path.join(__dirname, 'components'),
    ],
  },
})
