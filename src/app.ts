import Koa from 'koa'
// const Koa = require('koa')

const app = new Koa

app.listen(3000, ()=>{console.log('server start...')})

// "start": " tsc && babel-node src/app.js --presets es2015,stage-2",