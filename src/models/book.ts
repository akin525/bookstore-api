import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        publicationYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Book',
    }
);

export default Book;
