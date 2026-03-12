'use client';

import { usePathname, useRouter } from '@/i18n/navigation';

const locales = [
  { code: 'en', label: 'EN', region: 'Worldwide' },
  { code: 'az', label: 'AZ', region: 'Bakı' },
] as const;

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700">
      <span className="text-xs text-slate-500 uppercase tracking-wider">Lang</span>
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => router.replace(pathname, { locale: code })}
          className="px-3 py-1 text-sm font-medium rounded transition-colors hover:bg-slate-700 text-slate-300 hover:text-amber-400"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
