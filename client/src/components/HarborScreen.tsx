import { useState } from 'react';
import { OceanScene } from '../game/OceanScene';
import { LeftNav } from './LeftNav';
import { ShipCarousel } from './ShipCarousel';
import { ShipStatsPanel } from './ShipStatsPanel';
import { TopBar } from './TopBar';
import { fleet } from '../ui/shipData';

export function HarborScreen() {
  const [selectedShipId, setSelectedShipId] = useState<string>(fleet[0].id);
  const selectedShip = fleet.find(ship => ship.id === selectedShipId) ?? fleet[0];

  return (
    <main className="relative h-full w-full overflow-hidden bg-abyss text-text-primary">
      <div className="absolute inset-0">
        <OceanScene />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgb(10_22_40/0.18)_55%,rgb(10_22_40/0.72)_100%)]" />

      <div className="pointer-events-none absolute left-1/2 top-24 z-10 -translate-x-1/2 text-center lg:left-[calc(50%+2.5rem)]">
        <p className="data-label text-data">Naval Command Center</p>
        <h1 className="mt-2 text-2xl font-bold tracking-wide drop-shadow-lg md:text-3xl">舰队港口</h1>
        <p className="mt-2 text-xs text-text-secondary md:text-sm">拖拽视角检查舰体 · 阶段〇场景已就位</p>
      </div>

      <TopBar />
      <LeftNav />
      <ShipStatsPanel ship={selectedShip} />
      <ShipCarousel ships={fleet} selectedShipId={selectedShip.id} onSelect={setSelectedShipId} />
    </main>
  );
}
