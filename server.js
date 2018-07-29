var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    _ = require('lodash');

var app = module.exports = express();
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.route('/api/fetch-transactions')
  .get((req, res) => {
    res.json({"ok": 1})
  })

app.route('/api/fetch-banks')
  .get((req, res) => {
    res.json({"ok": 1})
  })

app.use(express.static(__dirname + '/public'));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});