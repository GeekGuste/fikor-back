import dotenv from 'dotenv';
dotenv.config();

export const environment = {
    database_uri = process.env.DATABASE_URI,
    version = process.env.VERSION,
}