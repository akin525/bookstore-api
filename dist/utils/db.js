"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("./db.config"));
const sequelize = new sequelize_1.Sequelize(db_config_1.default.DB, db_config_1.default.USER, db_config_1.default.PASSWORD, {
    host: db_config_1.default.HOST,
    dialect: db_config_1.default.dialect,
    pool: {
        max: db_config_1.default.pool.max,
        min: db_config_1.default.pool.min,
        acquire: db_config_1.default.pool.acquire,
        idle: db_config_1.default.pool.idle
    }
});
// Test the connection
sequelize
    .authenticate()
    .then(() => {
    console.log("Connection to the database has been established successfully.");
})
    .catch((error) => {
    console.error("Unable to connect to the database:", error);
});
exports.default = sequelize;
