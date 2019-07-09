import * as Koa from 'koa'
import {test} from './test/test'

console.log('xxx111 sdh')
test()

const app =  new Koa

app.listen(3001, ()=>{console.log('server start...')})