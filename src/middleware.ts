import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export default async function middleware(request: NextRequest, response: NextResponse) {
  request.headers.set("Accept-Language", "fa");
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "fa"],
    defaultLocale: "fa",
    localeDetection: true,
    localePrefix: "never",
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
