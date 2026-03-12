'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { api } from '@/lib/api';

export function BackendStatus() {
  const t = useTranslations('backend');
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const check = async () => {
      try {
        const data = await api.getStatus();
        setOnline(data.status === 'ONLINE');
      } catch {
        setOnline(false);
      }
    };
    check();
    const id = setInterval(check, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">
      <span
        className={`w-3 h-3 rounded-full ${
          online === null
            ? 'bg-slate-500 animate-pulse'
            : online
              ? 'bg-emerald-500'
              : 'bg-red-500'
        }`}
      />
      <span
        className={`text-sm ${
          online === null ? 'text-slate-400' : online ? 'text-emerald-400' : 'text-red-400'
        }`}
      >
        {online === null ? t('checking') : online ? t('online') : t('offline')}
      </span>
    </div>
  );
}
