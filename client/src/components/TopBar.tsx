export function TopBar() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4">
      <div className="pointer-events-auto flex items-center gap-3 rounded-panel border border-edge bg-navy/85 px-4 py-2 shadow-lg backdrop-blur-xl">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-ice/50 bg-steel font-mono text-sm font-bold text-ice">
          07
        </div>
        <div>
          <p className="text-sm font-semibold leading-4">指挥官 Sea-13AA54</p>
          <p className="data-label mt-1">Level 01 · 北海舰队</p>
        </div>
      </div>

      <div className="pointer-events-auto hidden items-center gap-6 rounded-panel border border-edge bg-navy/85 px-5 py-2.5 shadow-lg backdrop-blur-xl md:flex">
        <div className="text-right">
          <p className="data-label">金币</p>
          <p className="font-mono text-base font-semibold text-gold">12,500</p>
        </div>
        <div className="h-8 w-px bg-edge" />
        <div className="text-right">
          <p className="data-label">经验</p>
          <p className="font-mono text-base font-semibold text-data">3,420</p>
        </div>
      </div>

      <button
        type="button"
        className="command-button pointer-events-auto flex h-11 w-11 items-center justify-center rounded-panel border border-edge bg-navy/85 text-text-secondary backdrop-blur-xl transition"
        aria-label="设置"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 15.25A3.25 3.25 0 1 0 12 8.75a3.25 3.25 0 0 0 0 6.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2.05 2.05 0 0 1-2.9 2.9l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2.05 2.05 0 0 1-2.9-2.9l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2.05 2.05 0 0 1 2.9-2.9l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2.05 2.05 0 0 1 2.9 2.9l-.06.06A1.7 1.7 0 0 0 19.4 9c.16.3.24.65.24 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z"
            stroke="currentColor"
            strokeWidth="1.35"
          />
        </svg>
      </button>
    </header>
  );
}
