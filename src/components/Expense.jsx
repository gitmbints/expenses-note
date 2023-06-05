import { useState, useReducer } from "react";
import Button from "./Button.jsx";
import ExpensesLists from "./ExpensesLists.jsx";
import Filter from "./Filter.jsx";
import ModalCreate from "./ModalCreate.jsx";
import { data } from "@/utils/data";
import dayjs from "dayjs";
import { createPortal } from "react-dom";
import expensesReducer from "@/reducers/expensesReducer.js";

export default function Expense() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [expenses, dispatch] = useReducer(expensesReducer, data);
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

  const handleChange = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const handleAddExpense = () => {
    dispatch({
      type: "expense-added",
      expense: { ...expense, id: getRandomNumber() },
    });
    resetInput();
  };

  const handleEditExpense = (nextExpense) => {
    dispatch({
      type: "expense-edited",
      expense: nextExpense,
    });
    resetInput();
  };

  const resetInput = () => {
    setExpense({ id: null, date: null, comment: "", amount: 0 });
  };

  const handleDeleteExpense = (expenseId) => {
    dispatch({
      type: "expense-deleted",
      id: expenseId,
    });
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
        <Button handleClick={openModal}>Ajouter</Button>
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
            handleAddDate={handleChangeDate}
            handleChange={handleChange}
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
