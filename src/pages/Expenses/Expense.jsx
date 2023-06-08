import { useState } from "react";
import Button from "../../components/Button.jsx";
import ExpensesLists from "./ExpensesLists.jsx";
import Filter from "../../components/Filter.jsx";
import ModalCreate from "./ModalCreate.jsx";
import { createPortal } from "react-dom";

export default function Expense() {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const openModal = () => {
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

      <ExpensesLists />

      {showModalCreate &&
        createPortal(
          <ModalCreate showModal={showModalCreate} onClose={closeModal} />,
          document.body
        )}
    </>
  );
}
