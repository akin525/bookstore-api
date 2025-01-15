"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategories = void 0;
const category_1 = require("../models/category");
// Get all categories
const getAllCategories = (req, res) => {
    res.status(200).json({ data: category_1.categories });
};
exports.getAllCategories = getAllCategories;
// Get a category by ID
const getCategoryById = (req, res) => {
    const id = parseInt(req.params.id);
    const category = category_1.categories.find((category) => category.id === id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ data: category });
};
exports.getCategoryById = getCategoryById;
// Create a new category
const createCategory = (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newCategory = {
        id: category_1.categories.length + 1,
        name,
        description,
    };
    category_1.categories.push(newCategory);
    res.status(201).json({ data: newCategory });
};
exports.createCategory = createCategory;
// Update an existing category
const updateCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    const categoryIndex = category_1.categories.findIndex((category) => category.id === id);
    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }
    const updatedCategory = Object.assign(Object.assign({}, category_1.categories[categoryIndex]), { name, description });
    category_1.categories[categoryIndex] = updatedCategory;
    res.status(200).json({ data: updatedCategory });
};
exports.updateCategory = updateCategory;
// Delete a category
const deleteCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const categoryIndex = category_1.categories.findIndex((category) => category.id === id);
    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }
    category_1.categories.splice(categoryIndex, 1);
    res.status(204).send();
};
exports.deleteCategory = deleteCategory;
