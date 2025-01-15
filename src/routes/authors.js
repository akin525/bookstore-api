"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorController_1 = require("../controllers/authorController");
const router = express_1.default.Router();
// CRUD Routes for Authors
router.get('/', authorController_1.getAllAuthors);
router.get('/:id', authorController_1.getAuthorById);
router.post('/', authorController_1.createAuthor);
router.put('/:id', authorController_1.updateAuthor);
router.delete('/:id', authorController_1.deleteAuthor);
exports.default = router;
