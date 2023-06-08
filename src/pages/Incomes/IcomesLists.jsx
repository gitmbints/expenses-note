import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import {
  IncomesContext,
  IncomesDispatchContext,
} from "@/store/context/IncomesContext";
import ModalEdit from "./ModalEdit";

export default function IncomesLists() {
  const incomes = useContext(IncomesContext);
  const dispatch = useContext(IncomesDispatchContext);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [incomeToEdit, setIncomeToEdit] = useState({});

  const openModal = (incomeId) => {
    setShowModalEdit(true);
    const income = incomes.find((income) => income.id === incomeId);
    setIncomeToEdit(income);
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
            {incomes.map((income) => (
              <tr
                key={income.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 odd:bg-white even:bg-slate-50 text-sm"
              >
                <td className="text-gray-500 px-2 py-4">{income.date}</td>
                <td className="text-gray-500 px-2 py-4">{income.comment}</td>
                <td className="text-gray-500 px-2 py-4 text-right">
                  {income.amount}
                </td>
                <td className="pl-5 pr-2 text-right">
                  <button
                    className="border-none bg-transparent font-semibold text-blue-600 hover:underline dark:text-blue-500"
                    onClick={() => openModal(income.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-2 text-right">
                  <button
                    className="border-none bg-transparent font-semibold text-blue-600 hover:underline dark:text-blue-500"
                    onClick={() =>
                      dispatch({
                        type: "income-deleted",
                        id: income.id,
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
            incomeToEdit={incomeToEdit}
          />,
          document.body
        )}
    </>
  );
}
