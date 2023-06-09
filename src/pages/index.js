import { Inter } from "next/font/google";
import Balance from "@/components/Balance.jsx";
import Tab from "@/components/Tab.jsx";
import { ExpensesProvider } from "@/store/context/ExpensesContext";
import { IncomesProvider } from "@/store/context/IncomesContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ExpensesProvider>
      <IncomesProvider>
        <div className={inter.className}>
          <h1 className="font-bold text-2xl text-center uppercase mt-5">
            Gestionnaire de budget
          </h1>
          <Balance />
          <Tab />
        </div>
      </IncomesProvider>
    </ExpensesProvider>
  );
}
