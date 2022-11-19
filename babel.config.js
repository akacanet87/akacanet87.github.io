module.exports = {
  presets: [
    '@babel/typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    // ['module-resolver',
    //   {
    //     root: ['./src'],
    //     extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    //     alias: { images: './src/assets/images' },
    //   },
    // ],
  ],
}
