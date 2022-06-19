import esbuild from 'esbuild'
import { resolve } from 'path'

const args = process.argv.slice(2)
// const mode = args.includes('-d') ? 'development' : 'production'

export function base(config = {}) {
  return esbuild.build({
    entryPoints: [resolve(`${args[0]}/index.js`)],
    format: 'iife', // 'esm',
    bundle: true,
    minify: true, // process.env.NODE_ENV === "production",
    // sourcemap: true,
    // splitting: true,
    target: ['esnext'],
    ...config
  })
}