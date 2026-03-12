import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DBName || 'noteSQL',
    process.env.DBuser || 'noteuser',
    process.env.DBpass || 'notepass', 
{
  host: 'localhost',
  dialect: 'mysql'
});

export const connectDatabase = async () => {
    try {
        console.log('Connecting MYSQL database...');
        await sequelize.authenticate();
        console.log('Connection established with database.');
    }
    catch (error) {
        console.error('Error connecting with database:', error);
        process.exit(1);
    }
};
