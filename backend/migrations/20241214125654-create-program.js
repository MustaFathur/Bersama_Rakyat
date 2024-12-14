module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.createTable('program', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          idLembaga: {
              type: Sequelize.INTEGER,
              allowNull: true,
              references: {
                  model: 'lembaga',
                  key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
          },
          nama: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          deskripsi: {
              type: Sequelize.TEXT,
              allowNull: true,
          },
          target: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          durasi: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          pj: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          wilayah: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          gambar: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
          },
      });
  },
  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('program');
  },
};
