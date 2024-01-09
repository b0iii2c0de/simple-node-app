import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres://my_username:my_password@localhost:5432/my_database", {
  dialect: "postgres",
  logging: console.log, // Обновленное логирование
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  balance: {
    type: Sequelize.INTEGER,
  },
});

export default sequelize;
export { User };
