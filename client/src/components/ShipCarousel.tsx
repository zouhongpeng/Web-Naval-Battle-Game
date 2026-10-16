import type { ShipSummary } from '../../../shared/ship';

interface ShipCarouselProps {
  ships: ShipSummary[];
  selectedShipId: string;
  onSelect: (shipId: string) => void;
}

export function ShipCarousel({ ships, selectedShipId, onSelect }: ShipCarouselProps) {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 md:px-6 md:pb-5">
      <div className="mx-auto max-w-5xl rounded-panel border border-edge bg-navy/88 p-3 shadow-2xl backdrop-blur-xl">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="data-label">Ship Dock</span>
          <span className="data-label">拖拽查看舰船 · 点击卡片切换</span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:flex md:overflow-x-auto md:pb-1">
          {ships.map(ship => {
            const selected = ship.id === selectedShipId;
            return (
              <button
                key={ship.id}
                type="button"
                disabled={ship.locked}
                onClick={() => onSelect(ship.id)}
                className={`ship-card h-20 shrink-0 rounded-xl bg-navy px-3 text-left ${
                  selected ? 'border-2 border-ice shadow-[0_0_24px_rgb(74_158_255/0.18)]' : 'border border-edge'
                } ${ship.locked ? 'cursor-not-allowed opacity-45' : 'cursor-pointer'}`}
              >
                <div className="flex h-full items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${selected ? 'border-ice/60 bg-steel text-ice' : 'border-edge bg-abyss text-text-secondary'}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 14h18l-2 4H5l-2-4Z" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M6 14 7.5 7h9L18 14M9 7V5h6v2M12 10v3" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{ship.locked ? '未解锁舰船' : ship.name}</p>
                    <p className="mt-0.5 text-xs text-text-secondary">
                      {ship.shipClass} · {ship.tier}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-text-secondary">{ship.locked ? 'LOCK' : 'READY'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
