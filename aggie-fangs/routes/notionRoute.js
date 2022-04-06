const express = require("express");
router = express.Router();

notionRoute = require("../controllers/notionControllers"); 
//router.get( "/", notionRoute.defaultController);
router.get( "/", notionRoute.notionDefaultDB);




module.exports = router;