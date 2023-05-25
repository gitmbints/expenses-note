import { useState } from "react";
import Button from "./Button";
import ExpensesLists from "./ExpensesLists";
import Filter from "./Filter";
import ModalCreate from "./ModalCreate";
import { data } from "@/utils/data";
import dayjs from "dayjs";
import { createPortal } from "react-dom";

export default function Expense() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [expenses, setExpenses] = useState(data);
  const [expense, setExpense] = useState({
    id: null,
    date: null,
    comment: "",
    amount: 0,
  });
  const [isEdit, setIsEdit] = useState(false);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (1000000 - 10 + 1)) + 10;
  };

  const handleChangeDate = (selectedDate) => {
    const formatedDate = dayjs(selectedDate).format("DD/MM/YYYY");
    setExpense({ ...expense, date: formatedDate });
  };

  const handleChangeComment = (e) => {
    setExpense({ ...expense, comment: e.target.value });
  };

  const handleChangeAmount = (e) => {
    setExpense({ ...expense, amount: e.target.value });
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { ...expense, id: getRandomNumber() }]);
    setExpense({ id: null, date: null, comment: "", amount: 0 });
  };

  const handleEditExpense = (nextExpense) => {
    setExpenses(
      expenses.map((expense) => {
        if (expense.id === nextExpense.id) {
          return nextExpense;
        } else {
          return expense;
        }
      })
    );
    setExpense({ id: null, date: null, comment: "", amount: 0 });
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  const openModalEdit = (expenseId) => {
    setIsEdit(true);
    setShowModalCreate(true);
    const toEditExpense = expenses.find((expense) => expense.id === expenseId);
    setExpense(toEditExpense);
  };

  const openModal = () => {
    setIsEdit(false);
    setShowModalCreate(true);
  };

  const closeModal = () => {
    setShowModalCreate(false);
  };

  return (
    <>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <label>Dépenses du:</label>
          <div className="mt-2 arh-flex arh-justify-center">
            <Filter />
          </div>
        </div>
        <Button label="Ajouter" handleClick={openModal} />
      </div>

      <ExpensesLists
        data={expenses}
        handleOpenModal={openModalEdit}
        deleteExpense={handleDeleteExpense}
      />

      {showModalCreate &&
        createPortal(
          <ModalCreate
            data={expense}
            addDate={handleChangeDate}
            addComment={handleChangeComment}
            addAmount={handleChangeAmount}
            addExpense={handleAddExpense}
            showModal={showModalCreate}
            onClose={closeModal}
            isEdit={isEdit}
            editExpense={handleEditExpense}
          />,
          document.body
        )}
    </>
  );
}
