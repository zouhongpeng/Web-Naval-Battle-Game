const tabs = [
  { label: '出击', code: 'SORTIE', active: true },
  { label: '舰船', code: 'FLEET', active: false },
  { label: '改造', code: 'REFIT', active: false },
  { label: '科技树', code: 'TECH', active: false },
];

export function LeftNav() {
  return (
    <nav className="absolute left-5 top-1/2 z-20 hidden w-20 -translate-y-1/2 flex-col gap-2 rounded-panel border border-edge bg-navy/85 p-2 shadow-lg backdrop-blur-xl lg:flex">
      {tabs.map(tab => (
        <button
          key={tab.label}
          type="button"
          className={`command-button flex flex-col items-center gap-1 rounded-card px-2 py-3 transition ${
            tab.active ? 'border border-ice/70 bg-steel text-ice' : 'border border-transparent text-text-secondary'
          }`}
        >
          <span className="text-sm font-semibold">{tab.label}</span>
          <span className="font-mono text-[9px] tracking-[0.16em] opacity-70">{tab.code}</span>
        </button>
      ))}
    </nav>
  );
}
