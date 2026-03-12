import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';
export class Note extends Model {
}
Note.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    modelName: 'Note',
    tableName: 'note',
    timestamps: false, // Desactiva createdAt y updatedAt
});
