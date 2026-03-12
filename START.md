# 🏁 PHASE 9: GLOBAL CONTENT RECEIVER (READY FOR AI AGENTS)
1. **Model Update**: Расширить `ContentAwaiting.java` полями:
   - `language` (az, ru, tr, zh, hi, en, es, de, fr)
   - `region` (Baku / Global)
   - `keywords` (Ключи из топа Google)
   - `seoDescription` (Для сниппетов AdSense)
2. **REST API**: Создать `POST /api/articles/publish` для приема данных от Python-агентов.
3. **Next.js Routing**: Настроить динамические пути `/[lang]/articles` для индексации в Китае, Индии и Европе.
4. **Metadata**: Реализовать генерацию `<link rel="alternate" hreflang="...">` для всех 10+ языков.