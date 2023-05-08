import Button from "./Button";
import Filter from "./Filter";
import IncomesLists from "./IcomesLists";

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
        <Button label="Ajouter" />
      </div>
      <IncomesLists />
    </>
  );
}
