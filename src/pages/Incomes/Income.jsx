import Button from "../../components/Button.jsx";
import Filter from "../../components/Filter.jsx";
import IncomesLists from "./IcomesLists.jsx";
import { createPortal } from "react-dom";
import ModalCreate from "./ModalCreate.jsx";
import { useState } from "react";

export default function Income() {
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
          <h1>Revenus du:</h1>
          <div className="mt-2 arh-flex arh-justify-center">
            <Filter />
          </div>
        </div>
        <Button handleClick={openModal}>Ajouter</Button>
      </div>

      <IncomesLists />

      {showModalCreate &&
        createPortal(
          <ModalCreate showModal={showModalCreate} onClose={closeModal} />,
          document.body
        )}
    </>
  );
}
