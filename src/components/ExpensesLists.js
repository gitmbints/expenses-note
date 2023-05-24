export default function ExpensesLists({ data }) {
  return (
    <>
      <div className="mt-8">
        <table className="w-full dark:border-gray-700">
          <thead className="bg-slate-100 text-left text-sm">
            <tr>
              <th className="px-2 py-1.5 font-semibold">Date</th>
              <th className="px-2 py-1.5 font-semibold">Commentaires</th>
              <th className="px-2 py-1.5 font-semibold text-right">Montant</th>
              <th className="pl-5 pr-2 py-1.5 font-semibold">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((expense) => (
              <tr
                key={expense.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 odd:bg-white even:bg-slate-50 text-sm"
              >
                <td className="text-gray-500 px-2 py-3">{expense.date}</td>
                <td className="text-gray-500 px-2 py-3">{expense.comment}</td>
                <td className="text-gray-500 px-2 py-3 text-right">
                  {expense.amount}
                </td>
                <td className="pl-5 pr-2 text-right">
                  <a
                    href="/tables"
                    className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
