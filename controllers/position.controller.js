const {statusCodesEnum} = require('../configs');
const {Position} = require('../dataBase');
const {positionService} = require('../service');

module.exports = {
    createPosition: async (req, res, next) => {
        try {
            const createdPosition = await Position.create(req.body);

            // const {email, name: userName} = req.body;
            // await emailService.sendMail(email, emailActions.REGISTERED, {userName, userEmail: email});

            req.position = createdPosition.normalize();
            res.status(statusCodesEnum.CREATED_201)
                .json(req.position);
        } catch (e) {
            next(e);
        }
    },

    getPositions: async (req, res, next) => {
        try {
            const positions = await positionService.getAllPositions(req.query);

            req.positions = positions.map(position => position.normalize());
            res.json(req.positions);
        } catch (e) {
            next(e);
        }
    },

    getPositionById: (req, res, next) => {
        try {
            const position = req.position;

            req.position = position.normalize();
            res.json(req.position);
        } catch (e) {
            next(e);
        }
    },

    patchPositionById: async (req, res, next) => {
        try {
            const patchedPosition = await Position.findOneAndUpdate(req.position, req.body, {new: true});

            req.position = patchedPosition.normalize();

            // await emailService.sendMail(email, emailActions.UPDATED, {userName, oldName});

            res.json(req.position)
                .status(statusCodesEnum.OK_200);
        } catch (e) {
            next(e);
        }
    },

    deletePositionById: async (req, res, next) => {
        try {
            await Position.deleteOne(req.position);

            // const {email, name: userName} = req.user;
            // await emailService.sendMail(email, emailActions.REMOVED, {userName, userEmail: email});

            res.sendStatus(statusCodesEnum.NO_CONTENT_204);
        } catch (e) {
            next(e);
        }
    },

};
