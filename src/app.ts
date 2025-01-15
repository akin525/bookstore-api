import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import bookRoutes from './routes/books';
import authorRoutes from './routes/authors';
import categoryRoutes from './routes/categories';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/authors', authorRoutes);
// Routes
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/categories', categoryRoutes)
export default app;
