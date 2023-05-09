import { useState } from "react";
import Button from "./Button";
import ExpensesLists from "./ExpensesLists";
import Filter from "./Filter";
import ModalCreate from "./ModalCreate";
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
        <Button label="Ajouter" handleClick={openModal} />
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
