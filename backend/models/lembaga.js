'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lembaga extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Relasi one-to-many dengan Program
            Lembaga.hasMany(models.Program, {
                foreignKey: 'idLembaga',
                as: 'program', // Alias untuk relasi
            });
        }
    }

    Lembaga.init({
        nama: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        gambar: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        tingkat: {
            type: DataTypes.ENUM('pusat', 'daerah'),
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Lembaga',
        tableName: 'lembaga',
        timestamps: true, // Menggunakan kolom createdAt dan updatedAt
    });

    return Lembaga;
};
