require('dotenv').config();     // .env configure file load

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');
const { route } = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

mongoose.Promise = global.Promise;          // use native Promise from Node.js

mongoose.connect(process.env.MONGO_URI, {   // use mongoDB
    useMongoClient: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.port || 4000;

app.use(bodyParser);        // use bodyparser, please write before router code

router.use('/api', api.routes());

router.get('/', (ctx, next) => {
    ctx.body = '홈';
});

router.get('/about', (ctx, next) => {
    ctx.body = '소개';
});

router.get('/about/:name', (ctx, next) => {
    const { id } = ctx.request.query;
    if(id) {
        ctx.body = '포스트 #' + id;
    } else {
        ctx.body = '포스트 아이디가 없습니다.';
    }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('server is listening to port 4000');
})