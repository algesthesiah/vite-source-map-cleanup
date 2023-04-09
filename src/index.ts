import rimraf from 'rimraf';

export default function ViteSourceMapCleanup() {
  let config
  return {
    name: 'vite:source-map-cleanup',
    apply: 'build',
    enforce: 'post',
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    closeBundle() {
      if (config.command === 'build') {
        rimraf(`${config.build.outDir}/**/*.js.map`, err => {
          if (err) throw err
        })
      }
    },
  }
}
