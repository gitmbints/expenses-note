import {
  ExpensesContext,
  ExpensesDispatchContext,
} from "@/store/context/ExpensesContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import ModalEdit from "./ModalEdit";

export default function ExpensesLists() {
  const expenses = useContext(ExpensesContext);
  const dispatch = useContext(ExpensesDispatchContext);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});

  const openModal = (expenseId) => {
    setShowModalEdit(true);
    const expense = expenses.find((expense) => expense.id === expenseId);
    setExpenseToEdit(expense);
  };

  const closeModal = () => {
    setShowModalEdit(false);
  };

  return (
    <>
      <div className="mt-8">
        <table className="w-full dark:border-gray-700">
          <thead className="bg-slate-100 text-left text-sm">
            <tr>
              <th className="px-2 py-4 font-semibold">Date</th>
              <th className="px-2 py-4 font-semibold">Commentaires</th>
              <th className="px-2 py-4 font-semibold text-right">Montant</th>
              <th className="pl-5 pr-2 py-4 font-semibold">
                <span className="sr-only">Edit</span>
              </th>
              <th className="pl-5 pr-2 py-4 font-semibold">
                <span className="sr-only">Suppr</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 odd:bg-white even:bg-slate-50 text-sm"
              >
                <td className="text-gray-500 px-2 py-4">{expense.date}</td>
                <td className="text-gray-500 px-2 py-4">{expense.comment}</td>
                <td className="text-gray-500 px-2 py-4 text-right">
                  {expense.amount}
                </td>
                <td className="pl-5 pr-2 text-right">
                  <button
                    className="border-none bg-transparent font-semibold text-blue-600 hover:underline dark:text-blue-500"
                    onClick={() => openModal(expense.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-2 text-right">
                  <button
                    className="border-none bg-transparent font-semibold text-blue-600 hover:underline dark:text-blue-500"
                    onClick={() =>
                      dispatch({
                        type: "expense-deleted",
                        id: expense.id,
                      })
                    }
                  >
                    Suppr
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModalEdit &&
        createPortal(
          <ModalEdit
            showModal={showModalEdit}
            onClose={closeModal}
            expenseToEdit={expenseToEdit}
          />,
          document.body
        )}
    </>
  );
}
