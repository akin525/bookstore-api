import { Request, Response } from 'express';
import { books, Book } from '../models/book';

export const getBooks = (req: Request, res: Response) => {
    res.status(200).json({ data: books });
};

export const createBook = (req: Request, res: Response) => {
    const { title, authorId, categoryId, publicationYear, isbn } = req.body;

    if (!title || !authorId || !categoryId || !publicationYear || !isbn) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBook: Book = {
        id: books.length + 1,
        title,
        authorId,
        categoryId,
        publicationYear,
        isbn,
    };

    books.push(newBook);
    res.status(201).json({ data: newBook });
};
