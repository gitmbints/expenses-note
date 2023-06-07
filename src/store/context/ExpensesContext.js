import { expensesReducer } from "@/store/reducers/expensesReducer";
import { data } from "@/utils/data";
import { createContext, useReducer } from "react";

export const ExpensesContext = createContext(null);
export const ExpensesDispatchContext = createContext(null);

export function ExpensesProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, data);

  return (
    <ExpensesContext.Provider value={expenses}>
      <ExpensesDispatchContext.Provider value={dispatch}>
        {children}
      </ExpensesDispatchContext.Provider>
    </ExpensesContext.Provider>
  );
}
