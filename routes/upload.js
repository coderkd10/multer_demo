var express = require('express');
var multer  = require('multer');
var path = require("path");

var router = express.Router();

var upload = multer({
	dest: path.join(__dirname,  '../public/uploads')
});

router.post("/", upload.single('foo'), (req, res, next) => {
	res.json({
		"file" : req.file
	})
});

module.exports = router;
