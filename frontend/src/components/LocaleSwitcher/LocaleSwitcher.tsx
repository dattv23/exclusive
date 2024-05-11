import React from 'react';
import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/config';

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  return (
    <>
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
        {locales.map((cur) => (
          <option
            key={cur}
            value={cur}
            className="rounded-none bg-slate-400 px-4 py-2 text-white hover:bg-secondary"
          >
            {t('locale', { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </>
  );
};

export default LocaleSwitcher;
