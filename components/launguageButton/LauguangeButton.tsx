type LanguageButtonProps = {
  locale: string;
  currentLocale: string;
  setLocale: (locale: string) => void;
  children: React.ReactNode;
};

const LanguageButton = ({
  locale,
  currentLocale,
  setLocale,
  children,
}: LanguageButtonProps) => {
  const isActive = locale === currentLocale;
  const buttonClass = `px-4 py-2 text-white rounded-md transition-colors duration-300 ${
    isActive ? 'bg-transparent border' : 'bg-violet-500 hover:bg-violet-900'
  }`;

  return (
    <button className={buttonClass} onClick={() => setLocale(locale)}>
      {children}
    </button>
  );
};

export default LanguageButton;
