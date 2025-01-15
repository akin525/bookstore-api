import express from 'express';
import {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
} from '../controllers/authorController';

const router = express.Router();

// CRUD Routes for Authors
router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;
