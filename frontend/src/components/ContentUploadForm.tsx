'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { api } from '@/lib/api';

export function ContentUploadForm() {
  const t = useTranslations('content');
  const [title, setTitle] = useState('');
  const [rawText, setRawText] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const data = await api.uploadContent({
        title: title.trim() || 'Untitled',
        rawText: rawText.trim() || '',
      });
      setMessage({
        type: 'success',
        text: t('success', { id: data.id, status: data.status }),
      });
      setTitle('');
      setRawText('');
    } catch {
      setMessage({ type: 'error', text: t('error') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-10 p-6 rounded-xl border border-slate-700 bg-slate-800/50">
      <h2 className="text-xl font-semibold text-slate-200 mb-4">📤 {t('title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="content-title" className="block text-sm font-medium text-slate-300 mb-2">
            {t('formTitle')}
          </label>
          <input
            type="text"
            id="content-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('formTitlePlaceholder')}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="content-text" className="block text-sm font-medium text-slate-300 mb-2">
            {t('formText')}
          </label>
          <textarea
            id="content-text"
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            rows={5}
            placeholder={t('formTextPlaceholder')}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-y"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-medium rounded-lg transition-colors"
        >
          {loading ? t('submitting') : t('submit')}
        </button>
      </form>
      {message && (
        <div
          className={`mt-4 ${
            message.type === 'success' ? 'text-emerald-400' : 'text-red-400'
          }`}
        >
          {message.text}
        </div>
      )}
    </section>
  );
}
