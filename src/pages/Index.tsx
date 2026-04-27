import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/6166163a-1224-492f-b38d-4600b40f239c/files/c988bced-df1a-4199-8bae-10d4bf6f043b.jpg";

const TOTAL = 4;

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const go = (to: number) => {
    if (animating || to === current || to < 0 || to >= TOTAL) return;
    setDirection(to > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(to);
      setAnimating(false);
    }, 320);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating]);

  const slideClass = animating
    ? direction === "next"
      ? "opacity-0 translate-y-3"
      : "opacity-0 -translate-y-3"
    : "opacity-100 translate-y-0";

  const TAB_LABELS = ["Введение", "Основы", "Методы", "Итог"];

  return (
    <div className="h-screen w-screen bg-white overflow-hidden flex flex-col font-sans select-none">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-zinc-100 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">КФЭ</span>
          <div className="w-px h-3 bg-zinc-200" />
          <span className="font-display text-base font-light tracking-wide text-zinc-700">Криминалистика</span>
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2 bg-zinc-800" : "w-2 h-2 bg-zinc-200 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-zinc-300 tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* SLIDES */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${slideClass}`}
          style={{ transition: "opacity 0.32s ease, transform 0.32s ease" }}
        >

          {/* СЛАЙД 1 — ТИТУЛ */}
          {current === 0 && (
            <div className="h-full grid md:grid-cols-2">
              <div className="flex flex-col justify-center px-16 py-12">
                <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-8">
                  Образовательный курс · 2024
                </p>
                <h1 className="font-display text-7xl md:text-8xl font-light leading-[0.9] text-zinc-900 mb-8">
                  Крими-<br />нали-<br /><em className="italic">стика</em>
                </h1>
                <div className="w-12 h-px bg-zinc-300 mb-8" />
                <p className="font-sans text-sm text-zinc-500 leading-relaxed max-w-sm">
                  Научные основы раскрытия и расследования преступлений. Системный подход к профессиональной криминалистике.
                </p>
                <div className="mt-12 flex gap-10">
                  {[
                    { val: "4", label: "слайда" },
                    { val: "150+", label: "лет науке" },
                    { val: "6", label: "методик" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-3xl font-light text-zinc-900">{s.val}</div>
                      <div className="font-mono text-xs text-zinc-400 tracking-wider uppercase mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden md:block">
                <img
                  src={HERO_IMAGE}
                  alt="Криминалистика"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </div>
          )}

          {/* СЛАЙД 2 — ОСНОВЫ */}
          {current === 1 && (
            <div className="h-full flex flex-col px-16 py-10">
              <div className="mb-8">
                <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-2">Раздел I</p>
                <h2 className="font-display text-5xl font-light leading-none">
                  Основы <em className="italic">криминалистики</em>
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-px bg-zinc-100 flex-1 min-h-0">
                {[
                  { num: "01", title: "Предмет и задачи", body: "Изучение закономерностей механизма преступления и методов сбора информации для его раскрытия и предупреждения." },
                  { num: "02", title: "История дисциплины", body: "От дактилоскопии Гальтона в XIX веке — до современных ДНК-анализов и цифровой форензики." },
                  { num: "03", title: "Структура науки", body: "Четыре раздела: общая теория, техника, тактика следственных действий, методология расследования." },
                  { num: "04", title: "Место в системе права", body: "На стыке уголовного процесса, судебной медицины и естественных наук. Доказательная база правосудия." },
                  { num: "05", title: "Принципы", body: "Объективность, полнота, научность. Каждый вывод воспроизводим и верифицируем независимыми экспертами." },
                  { num: "06", title: "Этика расследования", body: "Соблюдение прав подозреваемых, недопустимость провокаций, строгое следование процессуальным нормам." },
                ].map((t) => (
                  <div key={t.num} className="bg-white p-6 flex flex-col gap-3 overflow-hidden">
                    <span className="font-mono text-xs text-zinc-300">{t.num}</span>
                    <h3 className="font-sans text-sm font-medium text-zinc-800">{t.title}</h3>
                    <p className="font-sans text-xs text-zinc-500 leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* СЛАЙД 3 — МЕТОДЫ */}
          {current === 2 && (
            <div className="h-full flex flex-col px-16 py-10">
              <div className="mb-8">
                <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-2">Раздел II</p>
                <h2 className="font-display text-5xl font-light leading-none">
                  Методы и <em className="italic">техники</em>
                </h2>
              </div>
              <div className="flex-1 min-h-0 flex flex-col justify-between">
                {[
                  { icon: "Search", title: "Осмотр места происшествия", desc: "Концентрический, эксцентрический и линейный методы. Фиксация обстановки и работа с вещественными доказательствами.", tags: ["Фиксация", "Протокол"] },
                  { icon: "Fingerprint", title: "Дактилоскопия", desc: "Классификация папиллярных узоров. Выявление следов порошками, парами йода, нингидрином. Базы АФИС.", tags: ["Следы", "АФИС"] },
                  { icon: "Microscope", title: "Трасология", desc: "Исследование следов орудий, транспорта, обуви. Получение слепков. Отождествление объектов по следам.", tags: ["Слепки", "Трасы"] },
                  { icon: "Dna", title: "Молекулярно-генетическая экспертиза", desc: "ДНК-профилирование биологических следов: STR, Y-STR, мтДНК. Работа с деградированными образцами.", tags: ["ДНК", "Биоследы"] },
                  { icon: "Monitor", title: "Цифровая форензика", desc: "Исследование компьютеров, мобильных устройств, сетевого трафика. Восстановление удалённых данных.", tags: ["Кибер", "Данные"] },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-6 border-b border-zinc-100 py-3">
                    <div className="w-8 h-8 border border-zinc-200 flex items-center justify-center flex-shrink-0">
                      <Icon name={m.icon} size={14} className="text-zinc-400" fallback="Search" />
                    </div>
                    <div className="flex-1 min-w-0 flex items-center gap-4">
                      <span className="font-sans text-sm font-medium text-zinc-800 w-56 flex-shrink-0">{m.title}</span>
                      <p className="font-sans text-xs text-zinc-500 leading-relaxed flex-1">{m.desc}</p>
                      <div className="flex gap-1 flex-shrink-0">
                        {m.tags.map(tag => (
                          <span key={tag} className="font-mono text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-200 flex-shrink-0">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* СЛАЙД 4 — ИТОГ */}
          {current === 3 && (
            <div className="h-full flex flex-col items-center justify-center px-16 py-12 text-center">
              <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-10">Заключение</p>
              <blockquote className="font-display text-4xl md:text-5xl font-light italic text-zinc-700 leading-tight max-w-3xl mb-5">
                «Криминалистика — это система научных положений и практических рекомендаций по раскрытию и расследованию преступлений»
              </blockquote>
              <cite className="font-mono text-xs text-zinc-400 not-italic tracking-wider mb-14">
                — Р.С. Белкин
              </cite>
              <div className="w-16 h-px bg-zinc-200 mb-14" />
              <div className="grid grid-cols-3 gap-16">
                {[
                  { icon: "BookOpen", label: "Теоретическая база" },
                  { icon: "Scale", label: "Правовой контекст" },
                  { icon: "Award", label: "Экспертный вывод" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center">
                      <Icon name={item.icon} size={16} className="text-zinc-400" fallback="Info" />
                    </div>
                    <span className="font-sans text-xs text-zinc-500 tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-zinc-300 tracking-widest uppercase mt-16">Конец презентации</p>
            </div>
          )}

        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="flex items-center justify-between px-8 py-4 border-t border-zinc-100 flex-shrink-0">
        <div className="flex gap-1">
          {TAB_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`font-mono text-xs px-3 py-1.5 transition-all duration-200 ${
                i === current
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(current - 1)}
            disabled={current === 0}
            className="w-8 h-8 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-zinc-400 hover:text-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <button
            onClick={() => go(current + 1)}
            disabled={current === TOTAL - 1}
            className="w-8 h-8 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-zinc-400 hover:text-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}
