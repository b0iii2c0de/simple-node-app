import Sequelize from "sequelize";

class User extends Sequelize.Model {
  static init(sequelize) {
    super(sequelize, {
      name: "users",
      schema: "public",
      timestamps: false,
      fields: {
        balance: {
          type: Sequelize.INTEGER,
          allowNull: false,
          initialValue: 10000,
        },
      },
    });
  }
}