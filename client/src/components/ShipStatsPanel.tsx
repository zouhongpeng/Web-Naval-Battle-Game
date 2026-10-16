import type { ShipSummary } from '../../../shared/ship';

interface ShipStatsPanelProps {
  ship: ShipSummary;
}

interface StatRowProps {
  label: string;
  value: string;
  mono?: boolean;
}

function StatRow({ label, value, mono = true }: StatRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-edge/70 py-2.5 last:border-b-0">
      <span className="data-label">{label}</span>
      <span className={mono ? 'data-value text-sm' : 'text-sm text-text-primary'}>{value}</span>
    </div>
  );
}

export function ShipStatsPanel({ ship }: ShipStatsPanelProps) {
  const hpPercent = Math.min(100, Math.round((ship.hp / 1200) * 100));

  return (
    <aside className="command-panel fade-in absolute right-5 top-24 z-20 hidden w-80 p-5 lg:block">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="data-label">Current Vessel</p>
          <h2 className="mt-2 text-xl font-bold leading-tight">{ship.name}</h2>
          <p className="mt-1 text-xs text-text-secondary">
            {ship.shipClass} · {ship.tier} 级
          </p>
        </div>
        <div className="rounded-card border border-ice/40 bg-steel px-2.5 py-1 font-mono text-xs text-ice">
          {ship.tier}
        </div>
      </div>

      <div className="my-5 h-px bg-edge" />

      <section>
        <div className="mb-2 flex items-center justify-between">
          <span className="data-label">HP</span>
          <span className="font-mono text-sm text-text-primary">{ship.hp}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-steel">
          <div className="h-full rounded-full bg-ice" style={{ width: `${hpPercent}%` }} />
        </div>
      </section>

      <section className="mt-4">
        <StatRow label="航速" value={`${ship.speed} 节`} />
        <StatRow label="转向" value={ship.turnRating} mono={false} />
        <StatRow label="主炮伤害" value={ship.gunDamage} />
        <StatRow label="射程" value={ship.range} mono={false} />
        <StatRow label="装填" value={`${ship.reload.toFixed(1)} 秒`} />
        <StatRow label="隐蔽性" value={ship.concealment} mono={false} />
      </section>

      <button
        type="button"
        className="command-button mt-5 w-full rounded-card border border-ice bg-ice/10 py-3 text-sm font-semibold tracking-wide text-ice transition"
      >
        进入改造
      </button>
    </aside>
  );
}
