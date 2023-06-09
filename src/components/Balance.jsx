import { ExpensesContext } from "@/store/context/ExpensesContext";
import { IncomesContext } from "@/store/context/IncomesContext";
import Image from "next/image";
import { useContext } from "react";

export default function Balance() {
  const expenses = useContext(ExpensesContext);
  const incomes = useContext(IncomesContext);

  function calculateBalance(expenses, incomes) {
    const totalExpenses = expenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    const totalIncomes = incomes.reduce(
      (total, income) => total + income.amount,
      0
    );

    const balance = totalIncomes - totalExpenses;

    return balance < 0 ? 0 : balance;
  }

  const balance = calculateBalance(expenses, incomes);

  return (
    <div className="mt-8">
      <div className="flex items-center justify-center space-x-2">
        <Image src="icons/money.svg" width={38} height={38} alt="Money icon" />
        <h2 className="font-semibold text-lg">Balance</h2>
      </div>
      <h3 className="font-semibold text-2xl text-green-600 text-center mt-3">
        {balance} Ariary
      </h3>
    </div>
  );
}
