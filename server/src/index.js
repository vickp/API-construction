const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

router.use('./api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => {
    console.log('server is listening to port 8000');
});