import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { BackendStatus } from '@/components/BackendStatus';
import { ContentUploadForm } from '@/components/ContentUploadForm';
import { RepairsTable } from '@/components/RepairsTable';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'az' }];
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'header' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('header');
  const tRepairs = await getTranslations('repairs');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-amber-400 tracking-tight">
                {t('title')}
              </h1>
              <p className="mt-2 text-slate-400">{t('subtitle')}</p>
            </div>
            <div className="flex items-center gap-4">
              <LocaleSwitcher />
              <BackendStatus />
            </div>
          </div>
        </header>

        <main>
          <ContentUploadForm />

          <div className="flex justify-between items-center mb-6 mt-10">
            <h2 className="text-xl font-semibold text-slate-200">
              {tRepairs('title')}
            </h2>
            <button
              type="button"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium rounded-lg transition-colors shadow-lg shadow-amber-500/25"
            >
              {tRepairs('addButton')}
            </button>
          </div>

          <RepairsTable />
        </main>
      </div>
    </div>
  );
}
