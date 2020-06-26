const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {                                  // 콜백 겹침 방지
    console.log(1);
    const started = new Date();                                 // 현재 시간
    next().then(() => {
        console.log(new Date() - started + 'ms');               // 처리 이후 로그 출력
    });
});

app.listen(8000, () => {
    console.log('server is listening to port 8000');
});