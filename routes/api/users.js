const express = require("express");
const ctrl = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, auth } = require("../../middlewares");
const {
    registerSchema,
    loginSchema,
    refreshSchema,
    update,
} = require("../../schemas/users");

const router = express.Router();
router.post(
    "/register",
    validateBody(registerSchema),
    ctrlWrapper(ctrl.register)
);
router.post("/login", validateBody(loginSchema), ctrlWrapper(ctrl.login));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.post("/refresh", validateBody(refreshSchema), ctrlWrapper(ctrl.refresh));
router.get("/user", auth, ctrlWrapper(ctrl.getUser));
router.patch(
    "/dailyRate",
    auth,
    validateBody(update),
    ctrlWrapper(ctrl.setDailyRate)
);

module.exports = router;
