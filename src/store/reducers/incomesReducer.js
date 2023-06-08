export function incomesReducer(incomes, action) {
  switch (action.type) {
    case "income-added": {
      return [...incomes, action.income];
    }
    case "income-edited": {
      return incomes.map((income) => {
        if (income.id === action.income.id) {
          return action.income;
        } else {
          return income;
        }
      });
    }
    case "income-deleted": {
      return incomes.filter((income) => income.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
