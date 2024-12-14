'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Program extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Relasi many-to-one dengan Lembaga
            Program.belongsTo(models.Lembaga, {
                foreignKey: 'idLembaga',
                as: 'lembaga', // Alias untuk relasi
            });
        }
    }

    Program.init({
        idLembaga: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nama: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        target: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        durasi: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        pj: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        wilayah: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        gambar: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Program',
        tableName: 'program',
        timestamps: true, // Menggunakan kolom createdAt dan updatedAt
    });

    return Program;
};
