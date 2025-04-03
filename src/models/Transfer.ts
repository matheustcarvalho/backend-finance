import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Transfer extends Model {
    public id!: number;
    public value!: number;
    public payerId!: number;
    public payeeId!: number;
    public createdAt!: Date;
}

Transfer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        value: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        payerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        payeeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Transfer',
        tableName: 'transfers',
    }
);

export default Transfer;
