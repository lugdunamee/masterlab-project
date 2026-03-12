import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const proxy = createMiddleware(routing);
export { proxy };

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
