"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.getBooks = void 0;
const book_1 = require("../models/book");
const getBooks = (req, res) => {
    res.status(200).json({ data: book_1.books });
};
exports.getBooks = getBooks;
const createBook = (req, res) => {
    const { title, authorId, categoryId, publicationYear, isbn } = req.body;
    if (!title || !authorId || !categoryId || !publicationYear || !isbn) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newBook = {
        id: book_1.books.length + 1,
        title,
        authorId,
        categoryId,
        publicationYear,
        isbn,
    };
    book_1.books.push(newBook);
    res.status(201).json({ data: newBook });
};
exports.createBook = createBook;
