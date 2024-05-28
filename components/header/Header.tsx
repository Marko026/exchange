'use client';
import initTranslations from '@/app/i18n';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LanguageButton from '../launguageButton/LauguangeButton';

const Header = () => {
  const initialLocale = 'en';

  const [locale, setLocale] = useState(initialLocale);
  const [t, setT] = useState<any>(() => () => '');

  useEffect(() => {
    const loadTranslations = async () => {
      const { t } = await initTranslations(locale, ['default']);
      setT(() => t);
    };
    loadTranslations();
  }, [locale]);

  return (
    <div
      className="flex flex-col lg:justify-between gap-5 items-center mb-8 bg-gradient-to-r 
    from-indigo-700 to-violet-800
    p-4 rounded-md shadow-lg">
      <div className="flex gap-5">
        <Image
          src="/assets/icons/cryptocurrency.svg"
          alt="Logo"
          width={50}
          height={50}
          className="invert"
        />
        <h1 className="text-3xl w-full font-bold text-white capitalize">
          {t('header')}
        </h1>
      </div>

      <div className="flex space-x-2 p-4 bg-transparent rounded-md">
        {['en', 'de', 'sr', 'ar'].map((lang) => (
          <LanguageButton
            key={lang}
            locale={lang}
            currentLocale={locale}
            setLocale={setLocale}>
            {lang.toUpperCase()}
          </LanguageButton>
        ))}
      </div>
    </div>
  );
};

export default Header;
