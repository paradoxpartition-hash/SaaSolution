import { NextRequest, NextResponse } from "next/server";
import { isLocale, type Locale } from "@/lib/i18n";

const supported = ["es", "en", "nl", "de"] as const;

function localeFromCountry(country: string | null): Locale | null {
  const code = country?.toUpperCase();
  if (!code) return null;
  if (["ES", "MX", "AR", "CO", "CL", "PE", "VE", "UY", "PY", "BO", "EC", "GT", "CR", "PA", "DO", "HN", "NI", "SV"].includes(code)) return "es";
  if (["NL", "BE"].includes(code)) return "nl";
  if (["DE", "AT", "CH", "LI", "LU"].includes(code)) return "de";
  return null;
}

function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, qValue] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: qValue ? Number(qValue) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const item of ranked) {
    const language = item.tag.split("-")[0];
    if ((supported as readonly string[]).includes(language)) return language as Locale;
  }

  return null;
}

function localeFromDomain(host: string): Locale {
  const normalized = host.toLowerCase().split(":")[0];
  if (normalized.endsWith(".es")) return "es";
  return "en";
}

export function middleware(request: NextRequest) {
  const requestedLocale = request.nextUrl.searchParams.get("lang");
  const cookieLocale = request.cookies.get("saas-locale")?.value;
  const geoCountry =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    request.headers.get("cloudfront-viewer-country");

  const locale =
    (isLocale(requestedLocale) && requestedLocale) ||
    (isLocale(cookieLocale) && cookieLocale) ||
    localeFromCountry(geoCountry) ||
    localeFromAcceptLanguage(request.headers.get("accept-language")) ||
    localeFromDomain(request.headers.get("host") ?? "");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-saas-locale", locale);

  if (isLocale(requestedLocale)) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("lang");
    const response = NextResponse.redirect(url);
    response.cookies.set("saas-locale", requestedLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax"
    });
    return response;
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.cookies.set("saas-locale", locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax"
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
