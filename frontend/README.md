# MasterLab Frontend

Next.js 16 application with i18n (internationalization) for **Baku (AZ)** and **Worldwide (EN)**.

## Features

- **i18n**: English (worldwide) and Azerbaijani (Baku) via `next-intl`
- **Routing**: `/en` and `/az` paths with automatic locale detection
- **Google AdSense**: Ready for integration — set `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`

## Structure

```
frontend/
├── messages/           # Translation files
│   ├── en.json         # English (worldwide)
│   └── az.json         # Azerbaijani (Baku)
├── src/
│   ├── app/
│   │   ├── [locale]/   # Locale-based routes
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── AdSense.tsx     # AdSense script loader
│   │   ├── AdUnit.tsx      # Ad slot component
│   │   └── LocaleSwitcher.tsx
│   ├── i18n/
│   │   ├── routing.ts
│   │   ├── request.ts
│   │   └── navigation.ts
│   └── proxy.ts        # i18n middleware (Next.js 16)
```

## Google AdSense

1. Add to `.env.local`:
   ```
   NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-xxxxxxxxxxxxxxxx
   ```

2. Use `<AdUnit slot="YOUR_SLOT_ID" />` where you want ads.

## Run

```bash
npm run dev
```

- EN: http://localhost:3000/en
- AZ (Baku): http://localhost:3000/az
- Root `/` redirects based on `Accept-Language` header
