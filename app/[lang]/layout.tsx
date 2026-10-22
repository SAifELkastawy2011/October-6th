import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cairo, Reem_Kufi } from "next/font/google";
import { content } from "@/lib/content";
import { isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const body = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

const display = Reem_Kufi({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-reem-kufi",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta } = content[lang];
  const authorName = "Saif Elkastawy";
  const title = `${meta.title} — ${authorName}`;
  const description = `${meta.description} ${
    lang === "ar" ? "مشروع من" : "A project by"
  } ${authorName}.`;

  return {
    metadataBase: new URL("https://october-1973.vercel.app"),
    title,
    description,
    authors: [{ name: authorName, url: "https://saifelkastawy.com" }],
    creator: authorName,
    publisher: authorName,
    keywords: [
      "October War",
      "1973",
      "Egypt",
      "history",
      "6th of October",
      "Yom Kippur War",
      "Saif Elkastawy",
      "حرب أكتوبر",
      "مصر",
    ],
    icons: {
      icon: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%23d7202e'/></svg>`,
    },
    alternates: {
      canonical: `/${lang}`,
      languages: { ar: "/ar", en: "/en" },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@saifelkastawy",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`${body.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}