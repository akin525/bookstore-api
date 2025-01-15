export interface DbConfig {
    DB: string;
    USER: string;
    PASSWORD: string;
    HOST: string;
    dialect: 'mysql' | 'postgres' | 'sqlite' | 'mssql';
    pool: {
        max: number;
        min: number;
        acquire: number;
        idle: number;
    };
}

const dbConfig: DbConfig = {
    DB: '',
    USER: '',
    PASSWORD: '',
    HOST: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

export default dbConfig;
