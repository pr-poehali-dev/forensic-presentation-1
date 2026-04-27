import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/6166163a-1224-492f-b38d-4600b40f239c/files/c988bced-df1a-4199-8bae-10d4bf6f043b.jpg";

type Section = "home" | "basics" | "methods";

const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "basics", label: "Основы криминалистики" },
  { id: "methods", label: "Методы и техники" },
];

const BASICS_TOPICS = [
  {
    num: "01",
    title: "Предмет и задачи",
    body: "Криминалистика изучает закономерности механизма преступления, возникновения информации о нём и методы её сбора для раскрытия, расследования и предупреждения преступлений.",
  },
  {
    num: "02",
    title: "История дисциплины",
    body: "От первых методов дактилоскопии Гальтона и Гершеля в XIX веке — до современных ДНК-анализов и цифровой форензики. Наука, рождённая из необходимости.",
  },
  {
    num: "03",
    title: "Структура науки",
    body: "Четыре раздела: общая теория, криминалистическая техника, тактика следственных действий и методология расследования отдельных видов преступлений.",
  },
  {
    num: "04",
    title: "Место в системе права",
    body: "Криминалистика находится на стыке уголовного процесса, судебной медицины и естественных наук, обеспечивая доказательную базу правосудия.",
  },
  {
    num: "05",
    title: "Принципы и методология",
    body: "Объективность, полнота, научность — три кита криминалистического исследования. Каждый вывод должен быть воспроизводим и верифицируем.",
  },
  {
    num: "06",
    title: "Этика расследования",
    body: "Соблюдение прав подозреваемых, недопустимость провокаций, строгое следование процессуальным нормам при сборе и фиксации доказательств.",
  },
];

const METHODS = [
  {
    icon: "Search",
    title: "Осмотр места происшествия",
    desc: "Методология первичного осмотра: концентрический, эксцентрический и линейный методы обследования. Правила фиксации обстановки и работы с вещественными доказательствами.",
    tags: ["Фиксация", "Вещдоки", "Протокол"],
  },
  {
    icon: "Fingerprint",
    title: "Дактилоскопия",
    desc: "Классификация папиллярных узоров. Методы выявления следов — порошки, пары йода, нингидрин. Сравнительный анализ и работа с дактилоскопическими базами данных.",
    tags: ["Следы", "Идентификация", "АФИС"],
  },
  {
    icon: "Microscope",
    title: "Трасология",
    desc: "Исследование следов орудий, транспортных средств, обуви и рук. Методика получения слепков и отпечатков. Отождествление объектов по следам.",
    tags: ["Следоведение", "Слепки", "Трасы"],
  },
  {
    icon: "FileText",
    title: "Судебное документоведение",
    desc: "Экспертиза рукописных и печатных документов, установление подделки, почерковедческий анализ, техническая экспертиза документов.",
    tags: ["Почерк", "Подделка", "Экспертиза"],
  },
  {
    icon: "Dna",
    title: "Молекулярно-генетическая экспертиза",
    desc: "ДНК-профилирование биологических следов. Виды ДНК-анализа: STR, Y-STR, мтДНК. Работа с деградированными образцами и базами ДНК-данных.",
    tags: ["ДНК", "Биоследы", "Профиль"],
  },
  {
    icon: "Monitor",
    title: "Цифровая форензика",
    desc: "Исследование электронных доказательств: компьютерных систем, мобильных устройств, сетевого трафика. Методы восстановления удалённых данных.",
    tags: ["Киберслед", "Данные", "Восстановление"],
  },
];

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">КФЭ</span>
            <div className="w-px h-4 bg-zinc-200" />
            <span className="font-display text-lg font-light tracking-wide">Криминалистика</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`font-sans text-sm transition-all duration-200 relative pb-0.5 ${
                  active === item.id
                    ? "text-zinc-900"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-zinc-900" />
                )}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-zinc-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActive(item.id); setMenuOpen(false); }}
                className={`block w-full text-left px-6 py-4 text-sm border-b border-zinc-50 transition-colors ${
                  active === item.id ? "text-zinc-900 bg-zinc-50" : "text-zinc-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="pt-16">

        {/* ── HOME ─────────────────────────────── */}
        {active === "home" && (
          <div>
            <section className="relative h-[85vh] flex items-end overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={HERO_IMAGE}
                  alt="Криминалистическая лаборатория"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>

              <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 w-full">
                <p className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
                  Образовательный курс · 2024
                </p>
                <h1 className="font-display text-6xl md:text-8xl font-light leading-none text-zinc-900 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
                  Криминали-<br />
                  <em className="italic font-light">стика</em>
                </h1>
                <p className="font-sans text-zinc-500 text-base max-w-md leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                  Научные основы раскрытия и расследования преступлений. От теории к практике — системный подход к профессиональной криминалистике.
                </p>
              </div>
            </section>

            <section className="border-y border-zinc-100 py-10">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { val: "3", label: "раздела курса" },
                  { val: "18+", label: "тем для изучения" },
                  { val: "150+", label: "лет истории науки" },
                  { val: "6", label: "методик расследования" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-4xl font-light text-zinc-900 mb-1">{s.val}</div>
                    <div className="font-mono text-xs text-zinc-400 tracking-wider uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-24">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-8">О курсе</p>
                  <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
                    Наука раскрытия<br />
                    <em className="italic">преступлений</em>
                  </h2>
                  <div className="w-12 h-px bg-zinc-300 mb-8" />
                  <p className="text-zinc-500 leading-relaxed text-sm mb-4">
                    Курс охватывает теоретические основы криминалистики, практические методы сбора и анализа доказательств, а также современные техники расследования.
                  </p>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    Материал структурирован для последовательного изучения — от базовых принципов к специализированным методикам, используемым в реальной следственной практике.
                  </p>
                </div>
                <div className="space-y-0">
                  {[
                    { label: "Основы криминалистики", sub: "Предмет, история, структура науки", target: "basics" as Section },
                    { label: "Криминалистическая техника", sub: "Инструменты и методы сбора доказательств", target: "methods" as Section },
                    { label: "Тактика следствия", sub: "Методология следственных действий", target: "methods" as Section },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-zinc-100 py-6 flex items-center justify-between group cursor-pointer"
                      onClick={() => setActive(item.target)}
                    >
                      <div>
                        <div className="font-sans text-sm font-medium text-zinc-800 mb-1 group-hover:text-zinc-900 transition-colors">
                          {item.label}
                        </div>
                        <div className="font-mono text-xs text-zinc-400">{item.sub}</div>
                      </div>
                      <Icon name="ArrowRight" size={16} className="text-zinc-300 group-hover:text-zinc-600 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 py-20">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-6">Начать изучение</p>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-8">
                  Профессиональный подход<br />к <em className="italic">расследованию</em>
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setActive("basics")}
                    className="px-8 py-3 bg-white text-zinc-900 text-sm font-sans font-medium hover:bg-zinc-100 transition-colors"
                  >
                    Основы криминалистики
                  </button>
                  <button
                    onClick={() => setActive("methods")}
                    className="px-8 py-3 border border-zinc-700 text-zinc-300 text-sm font-sans hover:border-zinc-500 transition-colors"
                  >
                    Методы и техники
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ── BASICS ──────────────────────────── */}
        {active === "basics" && (
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-16">
              <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-4">Раздел I</p>
              <h1 className="font-display text-5xl md:text-7xl font-light leading-none mb-6">
                Основы<br /><em className="italic">криминалистики</em>
              </h1>
              <div className="w-16 h-px bg-zinc-300" />
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl mb-16">
              Фундаментальные понятия, принципы и структура криминалистики как самостоятельной юридической науки. Изучение начинается с понимания природы и задач дисциплины.
            </p>

            <div className="grid md:grid-cols-2 gap-0">
              {BASICS_TOPICS.map((topic, i) => (
                <div
                  key={i}
                  className={`border-zinc-100 p-8 group hover:bg-zinc-50 transition-colors cursor-pointer border-b ${
                    i % 2 === 0 ? "md:border-r" : ""
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-xs text-zinc-300 mt-1 flex-shrink-0">{topic.num}</span>
                    <div>
                      <h3 className="font-sans text-base font-medium text-zinc-800 mb-3 group-hover:text-zinc-900 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="font-sans text-sm text-zinc-500 leading-relaxed">{topic.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-zinc-200 pl-8 mt-20 mb-8">
              <blockquote className="font-display text-2xl font-light italic text-zinc-600 leading-relaxed mb-4">
                «Криминалистика — это система научных положений и основанных на них практических рекомендаций по раскрытию и расследованию преступлений»
              </blockquote>
              <cite className="font-mono text-xs text-zinc-400 not-italic tracking-wider">— Р.С. Белкин, основоположник советской криминалистики</cite>
            </div>

            <div className="pt-12 border-t border-zinc-100 flex justify-end">
              <button
                onClick={() => setActive("methods")}
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
              >
                Перейти к методам и техникам
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* ── METHODS ─────────────────────────── */}
        {active === "methods" && (
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-16">
              <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-4">Раздел II</p>
              <h1 className="font-display text-5xl md:text-7xl font-light leading-none mb-6">
                Методы и<br /><em className="italic">техники</em>
              </h1>
              <div className="w-16 h-px bg-zinc-300" />
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl mb-16">
              Практические инструменты криминалистики: от работы на месте происшествия до высокотехнологичного анализа цифровых следов. Каждый метод — отдельная дисциплина со своей методологией.
            </p>

            <div className="space-y-0">
              {METHODS.map((method, i) => (
                <div
                  key={i}
                  className="border-b border-zinc-100 py-10 grid md:grid-cols-[1fr_2fr_auto] gap-8 items-start group hover:bg-zinc-50 transition-colors px-4 -mx-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-400 transition-colors">
                      <Icon name={method.icon} size={18} className="text-zinc-400 group-hover:text-zinc-600 transition-colors" fallback="Search" />
                    </div>
                    <h3 className="font-sans text-sm font-medium text-zinc-800 group-hover:text-zinc-900 transition-colors">
                      {method.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-zinc-500 leading-relaxed">{method.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {method.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-px bg-zinc-100">
              {[
                { icon: "BookOpen", title: "Теоретическая база", desc: "Каждая методика опирается на строгую научную теорию и экспериментальную верификацию." },
                { icon: "Scale", title: "Правовой контекст", desc: "Все техники применяются строго в рамках уголовно-процессуального законодательства." },
                { icon: "Award", title: "Экспертный вывод", desc: "Результат любого криминалистического исследования — обоснованное заключение эксперта." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8">
                  <div className="w-8 h-8 border border-zinc-200 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={14} className="text-zinc-400" fallback="Info" />
                  </div>
                  <h4 className="font-sans text-sm font-medium text-zinc-800 mb-2">{item.title}</h4>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-zinc-100 flex justify-between">
              <button
                onClick={() => setActive("basics")}
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
              >
                <Icon name="ArrowLeft" size={16} className="group-hover:-translate-x-1 transition-transform" />
                Вернуться к основам
              </button>
              <button
                onClick={() => setActive("home")}
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                На главную
                <Icon name="Home" size={16} />
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400 tracking-widest">КФЭ</span>
            <div className="w-px h-3 bg-zinc-200" />
            <span className="font-display text-sm font-light text-zinc-500">Криминалистика</span>
          </div>
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="font-mono text-xs text-zinc-400 hover:text-zinc-700 tracking-wide transition-colors uppercase"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
