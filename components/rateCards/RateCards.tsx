import Image from 'next/image';

type RateCardProps = {
  currency: string;
  rate: string;
  icon?: string;
  formatRate: (rate: string) => string;
};

const RateCard = ({ currency, rate, icon, formatRate }: RateCardProps) => (
  <div className="bg-indigo-600 p-4 sm:p-6 w-full rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
    <Image
      src={icon ? icon : '/assets/icons/cryptocurrency.svg'}
      alt={currency}
      width={40}
      height={40}
      className="mr-4 invert"
      loading="lazy"
    />
    <div>
      <h2 className="text-lg font-semibold text-yellow-300 ">{currency}</h2>
      <div className="text-white flex flex-col gap-2 overflow-hidden">
        <p className="text-white font-bold mr-1 whitespace-nowrap overflow-ellipsis overflow-hidden">
          <span className="text-red-200">EUR:</span> {formatRate(rate)}
        </p>
        <p className="text-white font-bold mr-1 whitespace-nowrap overflow-ellipsis overflow-hidden">
          <span className="text-red-200">Crypto:</span>{' '}
          {(1 / parseFloat(formatRate(rate))).toFixed(6)}
        </p>
      </div>
    </div>
  </div>
);

export default RateCard;
