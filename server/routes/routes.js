var express           = require('express'),
    router 			  = express.Router(),
    demoController    = require('../controllers/demo-Controller');


router.get('/hello', function( req, res){
	console.info('Hello world!!');
});


//REST API
router.post('/api/meetups', demoController.create);

router.get('/api/meetups', demoController.list);

router.get('/', function (req, res) {
  res.sendfile('./client/views/index.html');
});

router.get('/demo', function (req, res) {
  res.sendfile('./client/views/demo.html');
});

module.exports = router;