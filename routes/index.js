var models = require('../models');

exports.view = function(req, res) {
    models.Message
    	.find()
    	.sort('-created')
    	.exec(displayPosts);

    function displayPosts(err, msg_posts) {
    	if (err) { console.log(err); res.send(500); }
    	else {
    		var data = {"data": msg_posts}
    		res.render("index", data);
    	}
    }
}
