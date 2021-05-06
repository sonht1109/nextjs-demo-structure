import { IntlProvider } from "react-intl";
import vi from './vi.json'
import en from './en.json'

const messageTranslations = { vi, en };

export default function LanguageProvider({ children } : {children: JSX.Element}) {
  const locale = "vi";
  return (
    <IntlProvider locale={locale} messages={messageTranslations[locale]}>
      {children}
    </IntlProvider>
  );
}