export type ShipClass = '战列舰' | '巡洋舰' | '驱逐舰' | '航空母舰';

export interface ShipSummary {
  id: string;
  name: string;
  shipClass: ShipClass;
  tier: string;
  hp: number;
  speed: number;
  turnRating: string;
  gunDamage: string;
  range: string;
  reload: number;
  concealment: string;
  locked?: boolean;
}
