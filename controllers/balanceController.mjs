// "use strict";

import sequelize from "./sequelize.mjs";

async function updateBalance(req, res) {
  try {
    // Валидация входных данных
    await BalanceValidator.validate(req);

    // Получение пользователя
    const userId = req.params.userId;
    const user = await sequelize.query("SELECT * FROM users WHERE id = ?", [userId]);

    if (user.length === 0) {
      res.status(404).send("User not found");
      return;
    }

    // Обновление баланса
    const currentBalance = user[0].balance;
    const newBalance = currentBalance + (req.body.direction === "credit" ? req.body.amount : -req.body.amount);

    if (newBalance < 0) {
      res.status(400).send("Not enough funds");
      return;
    }

    await sequelize.query("UPDATE users SET balance = ? WHERE id = ?", [newBalance, userId]);

    // Отправка ответа
    res.status(200).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

export { updateBalance };

