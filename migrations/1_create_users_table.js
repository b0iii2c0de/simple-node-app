import Umzug from "umzug";

const umzug = new Umzug({
  migrationsPath: "./migrations",
});

umzug.register({
  name: "create-users-table",
  up: async () => {
    await umzug.getDatabase().createTable("users", {
      name: "users",
      schema: "public",
      timestamps: true,
      fields: {
        balance: {
          type: Sequelize.INTEGER,
          allowNull: true,
          initialValue: 10000,
        },
      },
    });
  },
  down: async () => {
    await umzug.getDatabase().dropTable("users");
  },
});

await umzug.migrate();