import express, { Application, Request, Response } from 'express';
import sequelize from './utils/db'; // Sequelize instance
import authorsRoutes from './routes/authors';
import booksRoutes from './routes/books';
import categoriesRoutes from './routes/categories';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test the database connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

// Root route (to show "Server is running" message)
app.get('/', (req: Request, res: Response) => {
    res.send('Server is running!');
});

// Routes
app.use('/api/authors', authorsRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/categories', categoriesRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
