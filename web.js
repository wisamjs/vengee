  var express = require('express');
  var app = express();
  var route = __dirname+'/www/';
 app.use(express.static(route));
  app.listen(process.env.PORT || 5000);
