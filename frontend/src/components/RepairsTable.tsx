'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { api, type RepairOrder } from '@/lib/api';

function getStatusClass(status: string) {
  if (status === 'В работе' || status === 'In progress') return 'bg-amber-500/20 text-amber-400';
  if (status === 'Ожидает' || status === 'Waiting') return 'bg-emerald-500/20 text-emerald-400';
  return 'bg-slate-500/20 text-slate-300';
}

export function RepairsTable() {
  const t = useTranslations('repairs');
  const tCommon = useTranslations('common');
  const [orders, setOrders] = useState<RepairOrder[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .getRepairs()
      .then(setOrders)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50">
        <div className="px-6 py-8 text-center text-red-400">{t('loadError')}</div>
      </div>
    );
  }

  if (orders === null) {
    return (
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50">
        <div className="px-6 py-8 text-center text-slate-500">{tCommon('loading')}</div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700 bg-slate-800">
            <th className="px-6 py-4 text-left text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {t('id')}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {t('client')}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {t('device')}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {t('status')}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {orders.map((o) => (
            <tr key={o.id} className="hover:bg-slate-700/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-slate-300">#{o.id}</td>
              <td className="px-6 py-4 text-sm text-slate-200">{o.clientName}</td>
              <td className="px-6 py-4 text-sm text-slate-200">{o.device}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusClass(o.status)}`}
                >
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
