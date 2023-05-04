import Image from 'next/image';

export default function Balance() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-center space-x-2">
        <Image 
          src="icons/money.svg"
          width={38}
          height={38}
          alt="Money icon"
        />
        <h2 className="font-semibold text-lg">Balance</h2>
      </div>
      <h3 className="font-semibold text-2xl text-green-600 text-center mt-3">200.000 Ariary</h3>
    </div>
  );
}