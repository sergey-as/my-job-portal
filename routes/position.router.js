const router = require('express')
    .Router();

const {positionController} = require("../controllers");
const {positionMiddleware} = require("../middlewares");

router.get(
    '/',
    positionController.getPositions
);

module.exports = router;
