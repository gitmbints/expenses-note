import { Inter } from "next/font/google";
import { Modal, Label, TextInput, Textarea } from "flowbite-react";
import Button from "./Button";
import Picker from "./Picker";

const inter = Inter({ subsets: ["latin"] });

export default function ModalCreate({ showModal, onClose }) {
  return (
    <Modal
      show={showModal}
      size="md"
      popup={true}
      onClose={onClose}
      className={inter.className}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Ajouter votre dépense
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="date" value="Date:" />
            </div>
            <Picker />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Commentaire:" />
            </div>
            <Textarea id="comment" required={true}></Textarea>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Montant:" />
            </div>
            <TextInput id="amount" type="number" required={true} />
          </div>
          <div className="w-full text-right">
            <Button label="Ajouter" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
