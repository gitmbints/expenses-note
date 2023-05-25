import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { Inter } from "next/font/google";
import Picker from "./Picker";
const inter = Inter({ subsets: ["latin"] });

export default function ModalCreate({
  data,
  addDate,
  addComment,
  addAmount,
  addExpense,
  showModal,
  onClose,
  isEdit,
  editExpense,
}) {
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
                    {isEdit ? "Editer dépense" : "Ajouter dépense"}
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
                        <Picker handleChange={addDate} defaultIsShow={true} />
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
                          onChange={addComment}
                          placeholder="Placez un commentaire..."
                          value={data.comment}
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
                          type="number"
                          className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-0 block w-full rounded-md text-sm"
                          onChange={addAmount}
                          value={data.amount}
                        />
                      </div>

                      <div className="mt-8 text-right">
                        {isEdit ? (
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => {
                              editExpense(data);
                              onClose();
                            }}
                          >
                            Modifier
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => {
                              addExpense();
                              onClose();
                            }}
                          >
                            Ajouter
                          </button>
                        )}
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
