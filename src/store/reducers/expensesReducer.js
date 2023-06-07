export function expensesReducer(expenses, action) {
  switch (action.type) {
    case "expense-added": {
      return [...expenses, action.expense];
    }
    case "expense-edited": {
      return expenses.map((expense) => {
        if (expense.id === action.expense.id) {
          return action.expense;
        } else {
          return expense;
        }
      });
    }
    case "expense-deleted": {
      return expenses.filter((expense) => expense.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
