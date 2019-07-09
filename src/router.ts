import * as Router from 'koa-router'

const router = new Router()

router.post('/user', async (ctx, next) => {
  console.log(ctx.request.query)
  ctx.body = {name: 'xxx'}
})

export {
  router
}