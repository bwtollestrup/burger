var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + '/public'));

app.search(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride());
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set ('view engine', 'handlebars');

var routes = require('./controllers/burgers_contorller');
app.use('/',routes);


app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});
