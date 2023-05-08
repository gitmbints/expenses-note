import { Inter } from 'next/font/google';
import Balance from '@/components/Balance';
import Tab from '@/components/Tab';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <h1 className="font-bold text-2xl text-center uppercase mt-5">
        Expenses Note app
      </h1>
      <Balance />
      <Tab />
    </div>
  );
}
