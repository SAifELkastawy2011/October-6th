import Reveal from "./Reveal";
import type { Content } from "@/lib/content";

type Props = { title: string; leaders: Content["leaders"] };

export default function Leaders({ title, leaders }: Props) {
  return (
    <section className="px-6 py-28 md:px-[clamp(1.25rem,8vw,8rem)]">
      <Reveal>
        <h2 className="section-title mb-12 text-[clamp(2rem,5vw,3.5rem)] font-bold">
          {title}
        </h2>
      </Reveal>

      <ul className="max-w-[52rem] list-none">
        {leaders.map((l, i) => (
          <li key={l.name}>
            <Reveal
              className="leader flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-blood-deep py-[1.4rem] transition-[padding-inline-start,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-blood-bright hover:ps-4"
              delay={i * 0.08}
            >
              <strong className="text-[clamp(1.25rem,2.6vw,1.75rem)] font-bold">
                {l.name}
              </strong>
              <span className="text-muted">{l.role}</span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}