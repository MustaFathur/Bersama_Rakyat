module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.createTable('lembaga', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          nama: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          gambar: {
              type: Sequelize.STRING(255),
              allowNull: true,
          },
          deskripsi: {
              type: Sequelize.TEXT,
              allowNull: true,
          },
          tingkat: {
              type: Sequelize.ENUM('pusat', 'daerah'),
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
      await queryInterface.dropTable('lembaga');
  },
};
