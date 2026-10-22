import Reveal from "./Reveal";

type Props = { quote: string; tribute: string };

export default function Closing({ quote, tribute }: Props) {
  return (
    <section className="px-6 pb-28 pt-36 text-center md:px-[clamp(1.25rem,8vw,8rem)]">
      <Reveal>
        <blockquote className="mx-auto max-w-[46rem] font-display text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.5]">
          {quote}
        </blockquote>
      </Reveal>
      <Reveal delay={0.25}>
        <p className="mt-10 font-semibold text-blood-bright">{tribute}</p>
      </Reveal>
    </section>
  );
}