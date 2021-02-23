var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('welcome to API!');
});

require('./authRoutes')(router);
require('./agentRoutes')(router);
require('./customerRoutes')(router);


module.exports.router = router;