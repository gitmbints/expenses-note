import { expensesReducer } from "@/store/reducers/expensesReducer";
import { expensesData } from "@/utils/expenses";
import { createContext, useReducer } from "react";

export const ExpensesContext = createContext(null);
export const ExpensesDispatchContext = createContext(null);

export function ExpensesProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, expensesData);

  return (
    <ExpensesContext.Provider value={expenses}>
      <ExpensesDispatchContext.Provider value={dispatch}>
        {children}
      </ExpensesDispatchContext.Provider>
    </ExpensesContext.Provider>
  );
}
