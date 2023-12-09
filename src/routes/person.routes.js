"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/person.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(post_controller_1.getPersons)
    .post(post_controller_1.createPerson);
router.route('/:personId')
    .get(post_controller_1.getPerson)
    .delete(post_controller_1.deletePerson)
    .put(post_controller_1.updatePerson);
exports.default = router;
