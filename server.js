var express           = require('express'),
    app               = express(),
    routes            = require('./server/routes/routes'),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    config 			  = require('./configuration/config'),
    mysql 			  = require('mysql');

mongoose.connect(config.configMongo.url_connect);

//mysql 

var con = mysql.createConnection(config.configMysql);

// con.connect(function(err){
// 	if(!!err){
// 		console.log('err--',err)
// 	} else {
// 		console.log('Connected');
// 	}
// });

// con.query("CALL skub_listoftabs300tk('nguyentung','tungns@queenb.vn')", function(err, results, fields) {
//     if (err || results[0].res === 0) {
//     	// console.info('err-',err);
//         throw new Error("My Error ... ");
//     } else {
//         console.info(results);

//     }
// });

app.use(bodyParser());
app.set('port', process.env.PORT || 3000);



//set Routes
app.use('/', routes);
app.use('/js', express.static(__dirname + '/client/js'));



var server = app.listen(app.get('port'), function() {
	var host = server.address().address;
	var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});