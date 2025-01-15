import { Sequelize } from 'sequelize';
import dbConfig from './db.config';

const sequelize: Sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect, // No need to cast as `any` if properly typed
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

// Test the connection
sequelize
    .authenticate()
    .then((): void => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error): void => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;
