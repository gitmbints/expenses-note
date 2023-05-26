import Button from "./Button.jsx";
import Filter from "./Filter.jsx";
import IncomesLists from "./IcomesLists.jsx";

export default function Income() {
  return (
    <>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <h1>Revenus du:</h1>
          <div className="mt-2 arh-flex arh-justify-center">
            <Filter />
          </div>
        </div>
        <Button>Ajouter</Button>
      </div>
      <IncomesLists />
    </>
  );
}
