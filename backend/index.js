import express from 'express';
import dotenv from 'dotenv';
import {sequelize, connectDatabase} from './src/config/database.js';
import noteRoutes from './src/routes/note.routes.js';
import categoryRoutes from './src/routes/category.routes.js';
 import { setupAssociations } from './src/models/associations.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use('/api/notes', noteRoutes);
app.use('/api/categories', categoryRoutes);

(async () => {
    try {
        console.log('Connecting to data base...');
        await connectDatabase();
        console.log('Setting up model associations...');
        setupAssociations();
        console.log('Sincronizing model with database...');
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => console.log(`Servidor listening in port: ${PORT}`));
    }
    catch (error) {
        console.error('Error initializing application:', error);
        process.exit(1);
    }
})();