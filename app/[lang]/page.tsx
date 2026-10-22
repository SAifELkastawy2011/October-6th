import Link from "next/link";
import { notFound } from "next/navigation";
import Chapter from "@/components/Chapter";
import Closing from "@/components/Closing";
import Hero from "@/components/Hero";
import Leaders from "@/components/Leaders";
import MotionProvider from "@/components/MotionProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Stats from "@/components/Stats";
import { content } from "@/lib/content";
import { isLocale, numberLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = content[lang];
  const pad = new Intl.NumberFormat(numberLocale(lang), {
    minimumIntegerDigits: 2,
  });
  const other = lang === "ar" ? "en" : "ar";

  return (
    <MotionProvider>
      <ScrollProgress />

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-4 py-4 md:px-12">
        <span className="font-display text-xl font-bold text-blood-bright">
          {t.ui.brand}
        </span>
        <Link
          className="rounded-full border border-blood px-4 py-1 text-sm text-text-main transition-colors hover:border-blood-bright hover:bg-blood"
          href={`/${other}`}
          hrefLang={other}
          lang={other}
        >
          {t.ui.switchLabel}
        </Link>
      </header>

      <main>
        <Hero {...t.hero} scroll={t.ui.scroll} />

        {t.chapters.map((chapter, i) => (
          <Chapter
            key={chapter.title}
            index={i}
            number={pad.format(i + 1)}
            {...chapter}
          />
        ))}

        <Stats title={t.ui.statsTitle} stats={t.stats} lang={lang} />
        <Leaders title={t.ui.leadersTitle} leaders={t.leaders} />
        <Closing {...t.closing} />
      </main>
    </MotionProvider>
  );
}