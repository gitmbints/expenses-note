import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { Inter } from "next/font/google";
import Picker from "../../components/Picker.jsx";
import Button from "../../components/Button.jsx";
import { ExpensesDispatchContext } from "@/store/context/ExpensesContext.js";
const inter = Inter({ subsets: ["latin"] });
import dayjs from "dayjs";

export default function ModalEdit({ showModal, onClose, expenseToEdit }) {
  const [expense, setExpense] = useState({
    id: expenseToEdit.id,
    date: expenseToEdit.date,
    comment: expenseToEdit.comment,
    amount: expenseToEdit.amount,
  });

  const dispatch = useContext(ExpensesDispatchContext);

  const handleChangeDate = (selectedDate) => {
    const formatedDate = dayjs(selectedDate).format("DD/MM/YYYY");
    setExpense({ ...expense, date: formatedDate });
  };

  const handleChange = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const resetInput = () => {
    setExpense({ ...expense, date: "", comment: "", amount: 0 });
    onClose();
  };

  const handleEditExpense = (nextExpense) => {
    dispatch({
      type: "expense-edited",
      expense: nextExpense,
    });
    resetInput();
  };

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${inter.className} w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-center text-lg font-medium leading-6 text-gray-900"
                  >
                    Editer dépense
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="flex flex-col space-y-4">
                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="date"
                          className="font-medium text-sm text-gray-900"
                        >
                          Date:
                        </label>
                        <Picker handleChange={handleChangeDate} />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="comment"
                          className="font-medium text-sm text-gray-900"
                        >
                          Commentaire:
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-0 block w-full rounded-md text-sm"
                          onChange={handleChange}
                          placeholder="Placez un commentaire..."
                          value={expense.comment}
                        ></textarea>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="amount"
                          className="font-medium text-sm text-gray-900"
                        >
                          Montant:
                        </label>
                        <input
                          id="amount"
                          type="number"
                          name="amount"
                          className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-0 block w-full rounded-md text-sm"
                          onChange={handleChange}
                          value={expense.amount}
                        />
                      </div>

                      <div className="mt-8 text-right">
                        <Button
                          handleClick={() => {
                            handleEditExpense(expense);
                          }}
                        >
                          Modifier
                        </Button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
