class BalanceValidator {
  static async validate(req) {
    const userId = req.params.userId;
    const amount = Number(req.body.amount);
    const direction = req.body.direction;

    if (!userId) {
      throw new Error("UserId is required");
    }

    if (!amount) {
      throw new Error("Amount is required");
    }

    if (amount < 0) {
      throw new Error("Amount must be non-negative");
    }

    if (!direction || direction !== "credit" && direction !== "debit") {
      throw new Error("Direction must be either 'credit' or 'debit'");
    }

    return true;
  }
}