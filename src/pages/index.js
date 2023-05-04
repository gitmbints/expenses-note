import { Inter } from 'next/font/google';
import Balance from '@/components/Balance';
import Tabs from '@/components/Tabs';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <h1 className="font-bold text-2xl text-center uppercase mt-5">
        Expenses Note app
      </h1>
      <Balance />
      <Tabs />
    </div>
  );
}
