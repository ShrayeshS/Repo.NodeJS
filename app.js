var app = require('express')();
var router = require('./lib/routers/calcRouter');
app.use("/calculator", router);
if(!module.parent){
  app.listen(8080);
}
exports.app = app;


