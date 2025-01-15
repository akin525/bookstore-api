import { Request, Response } from 'express';
import Author  from '../models/author';

export const getAllAuthors = (req: Request, res: Response) => {
    res.status(200).json({ data: Author });
};

export const getAuthorById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const author = Author.find((author) => author.id === id);

    if (!author) {
        return res.status(404).json({ message: 'Author not found' });
    }

    res.status(200).json({ data: author });
};

export const createAuthor = (req: Request, res: Response) => {
    const { name, bio, birthdate } = req.body;

    if (!name || !bio || !birthdate) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newAuthor: Author = {
        id: authors.length + 1,
        name,
        bio,
        birthdate,
    };

    authors.push(newAuthor);
    res.status(201).json({ data: newAuthor });
};

// Update an existing author
export const updateAuthor = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, bio, birthdate } = req.body;

    const authorIndex = authors.findIndex((author) => author.id === id);

    if (authorIndex === -1) {
        return res.status(404).json({ message: 'Author not found' });
    }

    const updatedAuthor = { ...authors[authorIndex], name, bio, birthdate };
    authors[authorIndex] = updatedAuthor;

    res.status(200).json({ data: updatedAuthor });
};

// Delete an author
export const deleteAuthor = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const authorIndex = authors.findIndex((author) => author.id === id);

    if (authorIndex === -1) {
        return res.status(404).json({ message: 'Author not found' });
    }

    authors.splice(authorIndex, 1);
    res.status(204).send();
};
