import type { Locale } from "./i18n";

type Chapter = { ghost: string; label: string; title: string; text: string };
type Stat = { value: number; from?: number; suffix?: string; label: string };
type Leader = { name: string; role: string };

export type Content = {
  meta: { title: string; description: string };
  ui: {
    brand: string;
    switchLabel: string;
    scroll: string;
    statsTitle: string;
    leadersTitle: string;
  };
  hero: { date: string; hijri: string; title: string; subtitle: string };
  chapters: Chapter[];
  stats: Stat[];
  leaders: Leader[];
  closing: { quote: string; tribute: string };
};

export const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: "The Crossing – 6 October 1973",
      description:
        "The story of the 6 October 1973 war and how Egypt crossed the Suez Canal.",
    },
    ui: {
      brand: "6 October",
      switchLabel: "العربية",
      scroll: "Scroll",
      statsTitle: "In numbers",
      leadersTitle: "Behind the plan",
    },
    hero: {
      date: "6 October 1973",
      hijri: "10 Ramadan 1393",
      title: "The Crossing",
      subtitle: "The day Egypt crossed the canal and took back its pride.",
    },
    chapters: [
      {
        ghost: "1967",
        label: "1967 to 1973",
        title: "The long wait",
        text: "After June 1967, Sinai was under occupation and the Suez Canal became the front line. Through the War of Attrition and six years of hard training, Egypt's army learned that the next step had to come as a surprise.",
      },
      {
        ghost: "1973",
        label: "The preparation",
        title: "Silence and discipline",
        text: "Plans were drawn in small rooms by very few people. Soldiers trained on replicas of the canal defences until every move was memorised, and the date stayed secret to the last moment. The operation was named Badr, after the famous early victory in Islamic history.",
      },
      {
        ghost: "14:00",
        label: "Around two in the afternoon",
        title: "The first strike",
        text: "More than two hundred aircraft crossed the canal in the opening wave, while thousands of guns opened fire on the fortified positions along the east bank.",
      },
      {
        ghost: "BADR",
        label: "The crossing",
        title: "Over the sand",
        text: "Assault boats carried the first infantry across. Engineers used high-pressure water pumps to cut gaps in the huge sand ramparts of the Bar Lev Line, an idea credited to Baqi Zaki Youssef. Bridges went up through the night and armour poured into Sinai.",
      },
      {
        ghost: "6 | 10",
        label: "The wider picture",
        title: "Not alone",
        text: "Syria opened a second front on the Golan the same day, and Arab states stood behind Egypt politically and economically. The Second and Third Armies held their bridgeheads on the east bank.",
      },
      {
        ghost: "1982",
        label: "After the war",
        title: "Sinai comes home",
        text: "The war changed the political picture completely. The negotiations that followed led to the 1979 peace treaty, and Egypt regained Sinai in stages until 25 April 1982, then Taba in 1989.",
      },
    ],
    stats: [
      { value: 222, label: "aircraft in the first wave" },
      { value: 20, suffix: " m", label: "height of the sand ramparts, at most" },
      { value: 10, label: "Ramadan 1393, the day of the attack" },
      { value: 1982, from: 1900, label: "the year Sinai was handed back" },
    ],
    leaders: [
      { name: "Anwar Sadat", role: "President and Supreme Commander" },
      { name: "Ahmed Ismail Ali", role: "War Minister and Commander-in-Chief" },
      { name: "Saad El-Shazly", role: "Chief of Staff" },
      { name: "Mohamed Abdel Ghani El-Gamasy", role: "Chief of Operations" },
    ],
    closing: {
      quote:
        "The crossing was more than a military victory. It gave a nation back its belief in itself.",
      tribute: "Glory to the martyrs and to every soldier who crossed.",
    },
  },

  ar: {
    meta: {
      title: "العبور – ٦ أكتوبر ١٩٧٣",
      description: "قصة حرب السادس من أكتوبر ١٩٧٣ وكيف عبرت مصر قناة السويس.",
    },
    ui: {
      brand: "٦ أكتوبر",
      switchLabel: "English",
      scroll: "اسحب للأسفل",
      statsTitle: "بالأرقام",
      leadersTitle: "من خلف الخطة",
    },
    hero: {
      date: "٦ أكتوبر ١٩٧٣",
      hijri: "١٠ رمضان ١٣٩٣",
      title: "العبور",
      subtitle: "اليوم الذي عبرت فيه مصر القناة واستعادت كرامتها.",
    },
    chapters: [
      {
        ghost: "١٩٦٧",
        label: "من ١٩٦٧ إلى ١٩٧٣",
        title: "سنوات الانتظار",
        text: "بعد يونيو ١٩٦٧ بقيت سيناء تحت الاحتلال وصارت قناة السويس خط المواجهة. وخلال حرب الاستنزاف وست سنوات من التدريب الشاق أدرك الجيش أن الخطوة القادمة لا بد أن تأتي مفاجأة.",
      },
      {
        ghost: "١٩٧٣",
        label: "الإعداد",
        title: "صمت وانضباط",
        text: "رُسمت الخطط في غرف صغيرة وبين عدد قليل جدًا من الرجال. تدرّب الجنود على نماذج مطابقة لتحصينات القناة حتى حُفظت كل حركة عن ظهر قلب، وظل موعد الهجوم سرًا حتى اللحظة الأخيرة. وسُميت العملية «بدر» تيمنًا بالانتصار الشهير في صدر الإسلام.",
      },
      {
        ghost: "١٤:٠٠",
        label: "قرابة الثانية ظهرًا",
        title: "الضربة الأولى",
        text: "عبرت أكثر من مئتي طائرة القناة في الموجة الأولى، بينما فتحت آلاف المدافع نيرانها على التحصينات المقامة على طول الضفة الشرقية.",
      },
      {
        ghost: "بدر",
        label: "العبور",
        title: "فوق الرمال",
        text: "حملت قوارب الاقتحام أوائل المشاة إلى الضفة الأخرى. واستخدم المهندسون مضخات مياه عالية الضغط لفتح ثغرات في الساتر الترابي الضخم لخط بارليف، في فكرة تُنسب إلى المهندس باقي زكي يوسف. وأُقيمت الكباري خلال الليل وتدفقت المدرعات إلى سيناء.",
      },
      {
        ghost: "٦ | ١٠",
        label: "الصورة الأوسع",
        title: "لم تكن وحدها",
        text: "فتحت سوريا جبهة ثانية في الجولان في اليوم نفسه، ووقفت دول عربية إلى جانب مصر سياسيًا واقتصاديًا. وثبّت الجيشان الثاني والثالث رؤوس الكباري على الضفة الشرقية.",
      },
      {
        ghost: "١٩٨٢",
        label: "بعد الحرب",
        title: "سيناء تعود",
        text: "غيّرت الحرب الصورة السياسية بالكامل. وقادت المفاوضات التي تلتها إلى معاهدة السلام عام ١٩٧٩، واستردت مصر سيناء على مراحل حتى ٢٥ أبريل ١٩٨٢، ثم طابا عام ١٩٨٩.",
      },
    ],
    stats: [
      { value: 222, label: "طائرة في الموجة الأولى" },
      { value: 20, suffix: " م", label: "أقصى ارتفاع للساتر الترابي" },
      { value: 10, label: "رمضان ١٣٩٣، يوم الهجوم" },
      { value: 1982, from: 1900, label: "عام تسلّم سيناء" },
    ],
    leaders: [
      { name: "أنور السادات", role: "رئيس الجمهورية والقائد الأعلى" },
      { name: "أحمد إسماعيل علي", role: "وزير الحربية والقائد العام" },
      { name: "سعد الدين الشاذلي", role: "رئيس أركان حرب القوات المسلحة" },
      { name: "محمد عبد الغني الجمسي", role: "رئيس هيئة العمليات" },
    ],
    closing: {
      quote: "لم يكن العبور نصرًا عسكريًا فحسب، بل أعاد لأمة ثقتها بنفسها.",
      tribute: "المجد للشهداء ولكل جندي عبر.",
    },
  },
};
