import { base } from './base.js'

const args = process.argv.slice(2)

base({
  globalName: args[0],
  outfile: `bundlers/${args[0]}.js`
})
  .then(() => {
    console.log('Bundled!')
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })