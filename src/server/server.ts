import express = require("express");
import Routes = require( "./route/Routes");
import path = require("path");
import bodyParser = require("body-parser");

var app = express();

// 设置端口
app.set('port', process.env.PORT || 3000);
app.use("/app", express.static(path.resolve(__dirname, '../app')))
// 指定请求数据格式和编码
app.use(bodyParser.json());
// 加载解析urlencoded请求体的中间件
app.use(bodyParser.urlencoded({ extended: false }))
// 设置路由
app.use('/api', new Routes().routes);

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

app.use(function(err, req: express.Request, res: express.Response, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
export = app;