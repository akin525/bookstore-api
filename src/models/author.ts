import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

class Author extends Model {}

Author.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Author',
    }
);

export default Author;

