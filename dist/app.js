"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const books_1 = __importDefault(require("./routes/books"));
const authors_1 = __importDefault(require("./routes/authors"));
const categories_1 = __importDefault(require("./routes/categories"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(body_parser_1.default.json());
app.use('/api/authors', authors_1.default);
// Routes
app.use('/api/books', books_1.default);
app.use('/api/authors', authors_1.default);
app.use('/api/categories', categories_1.default);
app.use('/api/categories', categories_1.default);
exports.default = app;
