import express from "express";
import { User } from "./controllers/sequelize.mjs";
import { updateBalance } from "./controllers/balanceController.mjs";

async function start() {
  const app = express();

  // Создаем пользователя
  const user = new User({
    name: "John Doe",
    balance: 100,
  });

  // Сохраняем пользователя
  await user.save();

  // Регистрация маршрутов
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
  app.post("/users/:userId/balance", updateBalance); 

  // Запуск приложения
  app.listen(3000);
}

start();
