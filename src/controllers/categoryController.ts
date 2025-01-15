import { Request, Response } from 'express';
import { categories, Category } from '../models/category';

// Get all categories
export const getAllCategories = (req: Request, res: Response) => {
    res.status(200).json({ data: categories });
};

// Get a category by ID
export const getCategoryById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const category = categories.find((category) => category.id === id);

    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ data: category });
};

// Create a new category
export const createCategory = (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newCategory: Category = {
        id: categories.length + 1,
        name,
        description,
    };

    categories.push(newCategory);
    res.status(201).json({ data: newCategory });
};

// Update an existing category
export const updateCategory = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;

    const categoryIndex = categories.findIndex((category) => category.id === id);

    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }

    const updatedCategory = { ...categories[categoryIndex], name, description };
    categories[categoryIndex] = updatedCategory;

    res.status(200).json({ data: updatedCategory });
};

// Delete a category
export const deleteCategory = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const categoryIndex = categories.findIndex((category) => category.id === id);

    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }

    categories.splice(categoryIndex, 1);
    res.status(204).send();
};
