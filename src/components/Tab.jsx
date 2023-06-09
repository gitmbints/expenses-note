import { ExpensesProvider } from "@/store/context/ExpensesContext.js";
import Expense from "../pages/Expenses/Expense.jsx";
import Income from "../pages/Incomes/Income.jsx";
import { Tab } from "@headlessui/react";
import { IncomesProvider } from "@/store/context/IncomesContext.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            key="Expense"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Dépenses
          </Tab>
          <Tab
            key="Income"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Revenues
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <Expense />
          </Tab.Panel>

          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <Income />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
