import Counter from "./Counter";
import Reveal from "./Reveal";
import type { Content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Props = { title: string; stats: Content["stats"]; lang: Locale };

export default function Stats({ title, stats, lang }: Props) {
  return (
    <section className="px-6 py-28 md:px-[clamp(1.25rem,8vw,8rem)]">
      <Reveal>
        <h2 className="section-title mb-12 text-[clamp(2rem,5vw,3.5rem)] font-bold">
          {title}
        </h2>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-y border-blood-deep">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            className="border-blood-deep px-6 py-10 border-s first:border-s-0 max-sm:border-s-0 max-sm:border-b"
            delay={i * 0.1}
          >
            <b className="block font-display text-[clamp(3.2rem,7vw,5.5rem)] font-bold leading-tight text-blood-bright tabular-nums">
              <Counter to={s.value} from={s.from} suffix={s.suffix} lang={lang} />
            </b>
            <span className="text-muted">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}