module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "@csstools/postcss-global-data": {
      files: ['./src/app/queries.css']
    },
    "postcss-custom-media": {

    }
  },
}
