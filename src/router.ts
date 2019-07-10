import * as Router from 'koa-router'
import {getUser} from './action/user'

console.log('router')

const router = new Router()

router.post('/user', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = {name: 'xxx'}
})

router.get('/user', async (ctx, next) => {
  console.log('----->')
  let uses = await getUser()
  ctx.body = {user: uses}
})

export {
  router
}