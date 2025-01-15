"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "bookstore",
    dialect: "mysql",
    pool: {
        max: 5, // Maximum number of connection instances in the pool
        min: 0, // Minimum number of connection instances in the pool
        acquire: 30000, // Maximum time (ms) to wait for connection before throwing an error
        idle: 10000 // Maximum time (ms) a connection can remain idle before being released
    }
};
exports.default = dbConfig;
