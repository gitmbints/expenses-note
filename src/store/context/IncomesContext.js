import { incomesReducer } from "@/store/reducers/incomesReducer";
import { incomesData } from "@/utils/incomes";
import { createContext, useReducer } from "react";

export const IncomesContext = createContext(null);
export const IncomesDispatchContext = createContext(null);

export function IncomesProvider({ children }) {
  const [incomes, dispatch] = useReducer(incomesReducer, incomesData);

  return (
    <IncomesContext.Provider value={incomes}>
      <IncomesDispatchContext.Provider value={dispatch}>
        {children}
      </IncomesDispatchContext.Provider>
    </IncomesContext.Provider>
  );
}
