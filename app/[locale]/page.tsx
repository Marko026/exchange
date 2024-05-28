import ExchangeRates from '@/components/ExchangeRates';
import Header from '@/components/header/Header';

const Home = () => {
  return (
    <main className="flex flex-col  max-w-7xl mx-auto p-4 lg:p-24">
      <Header />
      <ExchangeRates />
    </main>
  );
};

export default Home;
