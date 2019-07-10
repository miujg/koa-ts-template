import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
// 跨域
import * as cors from 'koa2-cors'
// 自定义路由
import {router} from './router'
// 数据库连接
import * as db from './db/connect'
const dbObj = db

const app =  new Koa
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(bodyParser())

app.use(router.routes())

app.listen(3001, ()=>{console.log('server start...')})