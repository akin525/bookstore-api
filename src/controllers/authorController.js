"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const author_1 = require("../models/author");
// Get all authors
const getAllAuthors = (req, res) => {
    res.status(200).json({ data: author_1.authors });
};
exports.getAllAuthors = getAllAuthors;
// Get an author by ID
const getAuthorById = (req, res) => {
    const id = parseInt(req.params.id);
    const author = author_1.authors.find((author) => author.id === id);
    if (!author) {
        return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json({ data: author });
};
exports.getAuthorById = getAuthorById;
// Create a new author
const createAuthor = (req, res) => {
    const { name, bio, birthdate } = req.body;
    if (!name || !bio || !birthdate) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newAuthor = {
        id: author_1.authors.length + 1,
        name,
        bio,
        birthdate,
    };
    author_1.authors.push(newAuthor);
    res.status(201).json({ data: newAuthor });
};
exports.createAuthor = createAuthor;
// Update an existing author
const updateAuthor = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, bio, birthdate } = req.body;
    const authorIndex = author_1.authors.findIndex((author) => author.id === id);
    if (authorIndex === -1) {
        return res.status(404).json({ message: 'Author not found' });
    }
    const updatedAuthor = Object.assign(Object.assign({}, author_1.authors[authorIndex]), { name, bio, birthdate });
    author_1.authors[authorIndex] = updatedAuthor;
    res.status(200).json({ data: updatedAuthor });
};
exports.updateAuthor = updateAuthor;
// Delete an author
const deleteAuthor = (req, res) => {
    const id = parseInt(req.params.id);
    const authorIndex = author_1.authors.findIndex((author) => author.id === id);
    if (authorIndex === -1) {
        return res.status(404).json({ message: 'Author not found' });
    }
    author_1.authors.splice(authorIndex, 1);
    res.status(204).send();
};
exports.deleteAuthor = deleteAuthor;
