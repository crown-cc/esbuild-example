const esbuild = require('esbuild');

const source = `
import {
  Button,
  // Avatar
} from 'element-ui'
`
const time = Date.now()
const transformed = esbuild.transformSync(source);

console.log(Date.now() - time, transformed.code)
