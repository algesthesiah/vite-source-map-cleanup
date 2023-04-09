# vite-source-map-cleanup

This plugin searches the build output directory for *.js.map and *.css.map files to delete. It also removes the sourceMap comment found in any .js files.

## QUICK START

### install

> npm install -D vite-source-map-cleanup

### usage

#### vite

```typescript
{
  plugins:[
      ViteSourceMapCleanup()
   ]
}
```