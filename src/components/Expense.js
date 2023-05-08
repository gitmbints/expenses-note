import Button from "./Button";
import ExpensesLists from "./ExpensesLists";
import Filter from "./Filter";

export default function Expense() {
  return (
    <>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <label>Dépenses du:</label>
          <div className="mt-2 arh-flex arh-justify-center">
            <Filter />
          </div>
        </div>
        <Button label="Ajouter" />
      </div>

      <ExpensesLists />
    </>
  );
}
