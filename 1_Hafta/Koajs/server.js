const koa = require("koa");
const koaRouter = require("koa-router"); // importing Koa-Router
const logger = require("koa-logger");

const app = new koa();
const router = new koaRouter();
const date = new Date();
//MiddleWare
 // registering routes to the application
app.use(logger((str) => {
    console.log(str, date.toDateString(), date.toLocaleTimeString());
  })
);
app.use(router.routes()).use(router.allowedMethods());
//Router
router.get("index", "/", (context) => {
  context.body = `<h1>İndex sayfasına hoşgeldiniz</h1>`;
});
router.get("about", "/About", (context) => {
  context.body = "<h1>About sayfasına hoşgeldiniz</h1>";
});
router.get("contact", "/Contact", (context) => {
  context.body = "<h1>Contact sayfasına hoşgeldiniz</h1>";
});

const port = 3000;
app.listen(port, () => console.log(`Sunucu ${port} portunda başlatıldı.`));
