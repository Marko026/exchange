'use client';
import { useCallback, useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import RateCard from './rateCards/RateCards';
type ExchangeRatesData = {
  currency: string;
  rates: Record<string, string>;
};

type Icons = {
  [currency: string]: string;
};

const ExchangeRates = () => {
  const [data, setData] = useState<ExchangeRatesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [icons, setIcons] = useState<Icons>({});

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.coinbase.com/v2/exchange-rates?currency=EUR'
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      setData(result.data);

      const newIcons: Icons = {};
      for (const currency of Object.keys(result.data.rates)) {
        try {
          newIcons[
            currency
          ] = require(`cryptocurrency-icons/svg/icon/${currency.toLowerCase()}.svg`);
        } catch {
          console.log(`No icon found for currency: ${currency}`);
        }
      }
      setIcons(newIcons);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="mx-auto">
        <FaSpinner className="animate-spin text-4xl text-white" />
      </div>
    );
  }

  const formatRate = (rate: string) => {
    const parsedRate = parseFloat(rate);
    return parsedRate.toFixed(2);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data &&
          Object.entries(data.rates).map(([currency, rate]) => (
            <RateCard
              key={currency}
              currency={currency}
              rate={rate}
              icon={icons[currency]}
              formatRate={formatRate}
            />
          ))}
      </div>
    </div>
  );
};

export default ExchangeRates;
