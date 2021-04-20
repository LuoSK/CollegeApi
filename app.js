require('module-alias/register')

// const fs = require('fs')
const { join } = require('path')
const Koa = require('koa')
const parser = require('koa-bodyparser')
const qs = require('url')
const { requireDir } = require('@utils')
const request = require('@lib/request')
// const options = require('@config')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()
app.use(parser())

// load routes
requireDir(join(__dirname, 'app/api'), (route, fullPath, filename) => {
  if (!filename.endsWith('.js')) return
  const { method, target, url, responseType = 'json', query, data } = route
  router[method.toLowerCase()](url, async (ctx, next) => {
    let targetUrl = target
    const params = ctx.params
    if (params !== {}) {
      const targetParse = qs.parse(targetUrl)
      let targetPath = targetParse.pathname
      Object.keys(params).forEach((key, index) => {
        const reg = new RegExp(':' + key, 'g')
        targetPath = targetPath.replace(reg, ctx.params[key])
      })
      targetParse.pathname = targetPath
      targetUrl = qs.format(targetParse)
    }
    query && Object.assign(query, ctx.request.query)
    data && Object.assign(data, ctx.request.body)
    try {
      const res = await request(method, targetUrl, query, data, responseType)
      ctx.set('Content-Type', res.headers['content-type'])
      ctx.body = res.data
    } catch (err) {
      ctx.body = {
        code: "5555",
        error: err
      }
    }
  })
})
app.use(router.routes())


const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

// start app
app.listen(port, host, () => {
  console.log(`🌈 [ college-api ] @ http://${host}:${port}`)
})