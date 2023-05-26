import { Table } from "flowbite-react";
import { useState } from "react";
import { data } from "../utils/data";

export default function IncomesLists() {
  const [incomes, setIncomes] = useState(data);

  return (
    <div className="mt-8">
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Commentaires</Table.HeadCell>
          <Table.HeadCell>Montant</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {incomes.map((income) => (
            <Table.Row
              key={income.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {income.date}
              </Table.Cell>
              <Table.Cell>{income.comment}</Table.Cell>
              <Table.Cell>{income.amount}</Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
