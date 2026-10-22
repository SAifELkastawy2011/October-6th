export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const numberLocale = (lang: Locale) => (lang === "ar" ? "ar-EG" : "en");
