import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ApiStatus from '../../ApiStatus';

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const LANGUAGES = [
    { label: 'English', code: 'en' },
    { label: 'Swedish', code: 'se' },
  ];

  return (
    <header className="bg-udni-teal w-full sticky top-0 z-20 h-16 flex items-center print:hidden">
      <div className="container max-w-6xl p-4 mx-auto flex justify-between">
        <div className="space-x-4">
          <Link to="/" className="text-white font-bold">
            UDNI tip2toe {t('global.questionnaire')}
          </Link>
          <Link to="/help" className="text-white">
            {t('global.help')}
          </Link>
          <select
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
            defaultValue={'es'}
            className="p-2 pr-10 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-udni-teal-100"
          >
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <ApiStatus />
        </div>
      </div>
    </header>
  );
}
