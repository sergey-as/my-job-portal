const router = require('express')
    .Router();

const {validatorsName} = require("../configs");
const {applicantController} = require("../controllers");
const {applicantMiddleware} = require("../middlewares");
const {applicantValidator} = require("../validators");

router.get(
    '/',
    applicantController.getApplicants
);
router.post(
    '/',
    applicantMiddleware.isDataValid(applicantValidator, validatorsName.CREATE_APPLICANT, BODY),
    applicantMiddleware.isApplicantPresent,
    applicantController.createApplicant
);
router.get(
    '/:user_id',
    applicantMiddleware.isApplicantIdValid,
    applicantMiddleware.isApplicantByIdPresent,
    applicantController.getApplicantById
);
router.put(
    '/:applicant_id',
    applicantMiddleware.isApplicantIdValid,
    applicantMiddleware.isDataValid(userValidator, validatorsName.EMAIL_USER, PARAMS),
    applicantMiddleware.isApplicantByIdPresent,
    applicantController.updateApplicant
);
router.delete(
    '/:applicant_id',
    applicantMiddleware.isApplicantIdValid,
    applicantMiddleware.isApplicantByIdPresent,
    applicantController.deleteApplicant
);

module.exports = router;
