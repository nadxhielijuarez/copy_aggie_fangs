const express = require("express");
router = express.Router();

notionRoute = require("../controllers/notionControllers"); 
router.get( "/", notionRoute.notionControllers);

module.exports = router;