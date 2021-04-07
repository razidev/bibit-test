const express = require('express'),
router = express.Router(),
omdb = require('./omdbapi');

router.get("/search/", omdb.Search);
router.get("/detail/", omdb.Detail)

module.exports = router;